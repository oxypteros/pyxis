// src/app/(wopr)/page.tsx
"use client";

import { useEffect, useState, useRef, FormEvent } from "react";
import Link from "next/link";
import styles from "./wopr.module.css";
import { cn } from "@/lib/utils";

// Types
type AccessGrantedScreenProps = {
  onAuthFailure: () => void;
  onExit: () => void;
};

type OutputLine = { type: "output"; text: string };
type InputLine = { type: "input"; text: string };
type PromptLine = { type: "prompt"; text: string };

// Discriminated Union.
type Line = OutputLine | InputLine | PromptLine;

// Possible outcomes.
type CommandResponse = { type: "output"; text: string };
type RedirectAction = { type: "redirect"; url: string };

type Action = CommandResponse | RedirectAction;

type CommandMap = {
  [key: string]: Action;
};

// UI components

const AccessDeniedScreen = () => (
  <div className={styles.woprFlicker}>
    <h1>INDENTIFICATION NOT RECOGNIZED BY SYSTEM</h1>
    <p>--CONNECTION TERMINATED--</p>
  </div>
);

const CheckingScreen = () => (
  <div className={styles.woprFlicker}>CONNECTING...</div>
);

const AccessGrantedScreen = ({
  onAuthFailure,
  onExit,
}: AccessGrantedScreenProps) => {
  const [history, setHistory] = useState<Line[]>([
    { type: "prompt", text: "LOGON:" },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [mode, setMode] = useState<
    "LOGON" | "AWAITING_HALL_OF_FAME_CHOICE" | "AWAITING_CALLSIGN" | "LOCKED"
  >("LOGON");

  const commandResponses: CommandMap = {
    JOSHUA: {
      type: "output",
      text: "GREETINGS PROFESSOR FALKEN\nWOULD YOU LIKE TO ADD YOUR CALLSIGN TO THE LOG OF PREVIOUSLY IDENTIFIED USERS? (Y/N)",
    },
    "HELP LOGON": { type: "output", text: "HELP NOT AVAILABLE" },
    "HELP GAMES": {
      type: "output",
      text: "'GAMES' REFERS TO MODELS, SIMULATIONS AND GAMES\nWHICH HAVE TACTICAL AND STRATEGIC APPLICATIONS.",
    },
    "LIST GAMES": {
      type: "output",
      text: "FALKEN'S MAZE\nBLACK JACK\nGIN RUMMY\nHEARTS\nBRIDGE\nCHECKERS\nCHESS\nPOKER\nFIGHTER COMBAT\nGUERILLA ENGAGEMENT\nDESERT WARFARE\nAIR-TO-GROUND ACTIONS\nTHEATERWIDE TACTICAL WARFARE\nTHEATERWIDE BIOTOXIC AND CHEMICAL WARFARE\n\nGLOBAL THERMONUCLEAR WAR",
    },
  };

  // Keep the  input field focused
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleLogonCommand = (
    command: string,
    action: Action,
    commandLineText: string,
  ) => {
    if (command === "JOSHUA") {
      // Start a new "screen" for the "authenticated session"
      setHistory([
        { type: "input", text: commandLineText },
        action as OutputLine,
        { type: "prompt", text: ">" },
      ]);
      setMode("AWAITING_HALL_OF_FAME_CHOICE");
      return;
    }

    if (action.type === "redirect") {
      onAuthFailure(); // Trigger the connection termination
      return;
    }

    // Valid, but non-authenticating command
    if (action.type === "output") {
      setHistory([
        { type: "input", text: commandLineText },
        action,
        { type: "prompt", text: "LOGON:" },
      ]);
    }
  };

  const handleCallsignSubmit = async (callsign: string) => {
    const HOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL;
    const currentPrompt = history[history.length - 1].text;
    const commandLineText = `${currentPrompt} ${callsign}`;

    setHistory((prev) => [
      ...prev.slice(0, -1),
      { type: "input", text: commandLineText },
      {
        type: "output",
        text: `...LOGGING CALLSIGN: ${callsign.toUpperCase()}`,
      },
    ]);

    if (inputRef.current) {
      inputRef.current.disabled = true;
    }

    // Webhook Call
    if (HOOK_URL) {
      try {
        const response = await fetch(HOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ callsign }),
        });

        setTimeout(() => {
          if (response.ok) {
            setHistory((prev) => [
              ...prev,
              {
                type: "output",
                text: "CALLSIGN ACCEPTED AND ARCHIVED.\nTHANK YOU, FOR PLAYING PROFESSOR.\n--CONNECTION TERMINATED--",
              },
            ]);
          } else {
            console.error(
              "Webhook submission error:",
              response.status,
              response.statusText,
            );
            setHistory((prev) => [
              ...prev,
              {
                type: "output",
                text: "ARCHIVE SYSTEM ERROR. LOG FAILED.\nTHANK YOU, PROFESSOR.\n--CONNECTION TERMINATED--",
              },
            ]);
          }
          setMode("LOCKED");
          onExit();
        }, 2000);
      } catch (error) {
        console.error("Network error:", error);
        setTimeout(() => {
          setHistory((prev) => [
            ...prev,
            {
              type: "output",
              text: "TRANSMISSION ERROR. CONNECTION LOST.\nTHANK YOU, PROFESSOR.\n--CONNECTION TERMINATED--",
            },
          ]);
          setMode("LOCKED");
          onExit();
        }, 2000);
      }
    } else {
      // This block runs if HOOK_URL is undefined. No fetch call is made.
      console.warn("Webhook URL not found. Simulating successful submission.");
      setTimeout(() => {
        setHistory((prev) => [
          ...prev,
          {
            type: "output",
            text: "CALLSIGN ACCEPTED AND ARCHIVED.\nTHANK YOU, FOR PLAYING PROFESSOR.\n--CONNECTION TERMINATED--",
          },
        ]);
        setMode("LOCKED");
        onExit();
      }, 2000);
    }
  };

  const handleHallOfFameChoice = (command: string) => {
    const currentPrompt = history[history.length - 1].text;
    const commandLineText = `${currentPrompt} ${currentInput}`;

    if (command === "Y") {
      setHistory((prev) => [
        ...prev.slice(0, -1),
        { type: "input", text: commandLineText },
        { type: "output", text: "PLEASE ENTER YOUR CALLSIGN FOR THE ARCHIVE:" },
        { type: "prompt", text: "CALLSIGN >" },
      ]);
      setMode("AWAITING_CALLSIGN");
    } else if (command === "N") {
      setHistory((prev) => [
        ...prev.slice(0, -1),
        { type: "input", text: commandLineText },
        {
          type: "output",
          text: "A STRANGE GAME. THE ONLY WINNING MOVE IS NOT TO PLAY.\nFAREWELL.\n--CONNECTION TERMINATING--",
        },
      ]);
      setMode("LOCKED");
      setTimeout(() => {
        onExit();
      }, 1000);
    } else {
      setHistory((prev) => [
        ...prev.slice(0, -1),
        { type: "input", text: commandLineText },
        { type: "output", text: "INVALID INPUT. PLEASE ENTER (Y/N)" },
        { type: "prompt", text: ">" }, // Re-prompt
      ]);
    }
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const command = currentInput.toUpperCase().trim();
    if (command === "") return;

    const lastLine = history[history.length - 1];
    const commandLineText = `${lastLine.text} ${currentInput}`;

    // Get the action for the command.
    const action = commandResponses[command] || { type: "redirect" };

    switch (mode) {
      case "LOGON":
        handleLogonCommand(command, action, commandLineText);
        break;
      case "AWAITING_HALL_OF_FAME_CHOICE":
        handleHallOfFameChoice(command);
        break;
      case "AWAITING_CALLSIGN":
        handleCallsignSubmit(command);
        break;
    }
    setCurrentInput("");
  };

  return (
    <div
      ref={scrollRef}
      className="h-full overflow-y-auto"
      onClick={() => inputRef.current?.focus()}
    >
      {mode === "LOCKED" ? (
        // Locked State
        <div className="flex flex-col gap-y-4">
          {history.map((line, index) => (
            <p key={index} className="wopr-flicker whitespace-pre-wrap">
              {line.text}
            </p>
          ))}
        </div>
      ) : (
        // Active State
        <div className="flex flex-col gap-y-4">
          {history.slice(0, -1).map((line, index) => (
            <p
              key={index}
              className={cn(styles.woprFlicker, "whitespace-pre-wrap")}
            >
              {line.text}
            </p>
          ))}
          <div className="flex items-end">
            <p className={styles.woprFlicker}>
              {history[history.length - 1].text}
            </p>
            <form onSubmit={handleFormSubmit} className="flex-1">
              <input
                ref={inputRef}
                type="text"
                className={cn(
                  styles.woprFlicker,
                  styles.woprInput,
                  "h-8 w-full bg-transparent pl-2 outline-none",
                )}
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                autoFocus
                autoComplete="off"
                spellCheck="false"
                aria-label="Terminal input"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default function WoprPage() {
  const [accessStatus, setAccessStatus] = useState("checking");
  const [isExiting, setIsExiting] = useState(false);
  const handleExitSequence = () => {
    setIsExiting(true);
  };

  const handleAuthFailure = () => {
    setAccessStatus("denied");
  };

  useEffect(() => {
    const hasAccess = localStorage.getItem("wopr-access") === "true";
    if (hasAccess) {
      setAccessStatus("granted");
      localStorage.removeItem("wopr-access");
    } else {
      // No access === failure state
      handleAuthFailure();
    }
  }, []);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (accessStatus === "denied" || isExiting) {
      const duration = isExiting ? 5000 : 3000; // 5s for graceful exit, 3s for failure
      timerId = setTimeout(() => {
        window.location.href = "/";
      }, duration);
    }
    return () => clearTimeout(timerId);
  }, [accessStatus, isExiting]);

  return (
    <div
      className={cn(
        styles.woprPage,
        "flex min-h-screen w-full flex-col justify-between overflow-y-hidden text-lg",
      )}
    >
      <header className="flex h-8 justify-end p-8">
        <Link
          href="/"
          className={cn(
            styles.woprFlicker,
            "uppercase opacity-80 hover:opacity-100",
          )}
          aria-label="Exit WOPR system. Return to the homepage."
        >
          Disconnect
        </Link>
      </header>
      <main className="mb-12 grow overflow-auto px-8 py-12 text-xl">
        {accessStatus === "checking" && <CheckingScreen />}
        {accessStatus === "granted" && (
          <AccessGrantedScreen
            onAuthFailure={handleAuthFailure}
            onExit={handleExitSequence}
          />
        )}
        {accessStatus === "denied" && <AccessDeniedScreen />}
      </main>
      <footer
        className={cn(
          styles.woprFlicker,
          "fixed bottom-0 z-10 flex w-full flex-col",
        )}
      >
        {(() => {
          if (isExiting) {
            return (
              <>
                <div className="h-1 w-full bg-red-500/30">
                  {/* The animation duration should match the JS timeout */}
                  <div
                    className={cn(
                      styles.animateCountdown5s,
                      "h-full bg-red-500",
                    )}
                  ></div>
                </div>
                <p className="my-2 px-8">
                  Connection with (311) 399-2364 is terminating in 5 seconds...
                </p>
              </>
            );
          }

          if (accessStatus === "denied") {
            return (
              <>
                <div className="h-1 w-full">
                  <div
                    className={cn(
                      styles.animateCountdown3s,
                      "h-full bg-red-500",
                    )}
                  ></div>
                </div>
                <p className="my-2 px-8">
                  Connection with (311) 399-2364 is terminating in 3 seconds...
                </p>
              </>
            );
          }

          if (accessStatus === "granted") {
            return (
              <p className="my-2 px-8">
                Connection established with (311) 399-2364
              </p>
            );
          }

          if (accessStatus === "checking") {
            return (
              <p className="my-2 px-8">Connecting with (311) 399-2364...</p>
            );
          }

          return null;
        })()}
      </footer>
    </div>
  );
}
