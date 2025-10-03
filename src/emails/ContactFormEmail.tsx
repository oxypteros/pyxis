// src/emails/ContactFormEmail.tsx
import type React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Text,
  Preview,
} from "@react-email/components";

interface ContactFormEmailProps {
  senderEmail: string;
  message: string;
}

// This is a React component that will be rendered to HTML on the server.

export const ContactFormEmail = ({
  senderEmail,
  message,
}: ContactFormEmailProps): React.JSX.Element => (
  <Html>
    <Head />
    <Preview>You've Got Mail</Preview>
    <Body style={{ backgroundColor: "#f6f6f6", fontFamily: "sans-serif" }}>
      <Container
        style={{
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "#ffffff",
          border: "1px solid #cccccc",
          borderRadius: "5px",
        }}
      >
        <Heading style={{ fontSize: "24px", color: "#333333" }}>
          New Contact Form Submission
        </Heading>
        <Text style={{ fontSize: "16px", color: "#555555" }}>
          You received a new message from your portfolio contact form.
        </Text>
        <hr style={{ border: "1px solid #dddddd", margin: "20px 0" }} />
        <Heading
          as="h3"
          style={{ fontSize: "18px", color: "#444444", marginTop: "20px" }}
        >
          Sender:
        </Heading>
        <Text style={{ fontSize: "16px", color: "#555555" }}>{senderEmail}</Text>
        <Heading
          as="h3"
          style={{ fontSize: "18px", color: "#444444", marginTop: "20px" }}
        >
          Message:
        </Heading>
        <Text style={{ fontSize: "16px", color: "#555555" }}>{message}</Text>
      </Container>
    </Body>
  </Html>
);