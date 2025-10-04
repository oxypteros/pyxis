// src/components/forms/HomeContactForm.tsx
"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { toast, type ToastProps } from "@/lib/toast";

const SubmitButton = (): React.JSX.Element => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      aria-disabled={pending}
      className="h-auto w-full max-w-72"
    >
      {pending ? (
        <Icon name="loader" className="animate-spin" />
      ) : (
        "Send Message"
      )}
    </Button>
  );
};

export const HomeContactForm = (): React.JSX.Element => {
  const initialState = { success: false, message: "" };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const [formTimestamp, setFormTimestamp] = useState("");

  useEffect(() => {
    setFormTimestamp(Date.now().toString());
  }, []);

  useEffect(() => {
    if (state.message) {
      const toastProps: ToastProps = {
        variant: state.success ? "success" : "error",
        title: state.success
          ? "Your message has been sent!"
          : "Submission Failed",
        description: state.message,
        duration: 8000,
      };

      toast(toastProps);

      // If the submission was successful, reset the form.
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="userNickname">Nickname</label>
        <input
          type="text"
          id="userNickname"
          name="userNickname"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <input type="hidden" name="formTimestamp" value={formTimestamp} />
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="inter-heading block text-sm font-medium text-gray-700"
        >
          Email Address{" "}
          <span aria-hidden="true" className="text-gray-900">
            *
          </span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          aria-required="true"
          className="focus:ring-focus-form-ring/50 w-full rounded-sm border border-gray-200 px-3 py-2 focus:bg-gray-50 focus:text-gray-900 focus:ring-2 focus:outline-none"
          placeholder="me@example.com"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="inter-heading block text-sm font-medium text-gray-700"
        >
          Message{" "}
          <span aria-hidden="true" className="text-gray-900">
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          rows={5}
          className="focus:ring-focus-form-ring/50 w-full rounded-sm border border-gray-200 px-3 py-2 focus:bg-gray-50 focus:text-gray-900 focus:ring-2 focus:outline-none"
          placeholder="Your message..."
        />
      </div>
      <div className="flex items-center justify-end">
        <SubmitButton />
      </div>
    </form>
  );
};
