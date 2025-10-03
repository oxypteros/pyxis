// src/app/actions.ts
"use server"; 

import type React from "react";
import { Resend } from "resend";
import { z } from "zod";
import { ContactFormEmail } from "@/emails/ContactFormEmail";

// Honeypot: Form delay time
const MIN_SUBMISSION_TIME_MS = 2500;

// RESEND_API_KEY: Resend.com API key
const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  throw new Error("Missing or empty environment variable: RESEND_API_KEY");
}

// EMAIL_SENDER: The email initiator from resend (must belong to verified domain)
const fromEmail = process.env.EMAIL_SENDER;
if (!fromEmail) {
  throw new Error("Missing or empty environment variable: EMAIL_SENDER");
}

// EMAIL_RECIPIENT: Email address to get the message 
const toEmail = process.env.EMAIL_RECIPIENT;
if (!toEmail) {
  throw new Error("Missing or empty environment variable: EMAIL_RECIPIENT");
}

const resend = new Resend(resendApiKey);

// Zod schema
const contactFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." }),
});

interface ContactFormState {
  success: boolean;
  message: string;
}

export const submitContactForm = async (
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> => {

  // First Honeypot Layer: If this is filled out, it's a bot.
  if (formData.get("userNickname")) {
    return { success: true, message: "Thank you for your submission!" };
  }

  // Second Honeypot Layer:If the form is submitted in under the minimum 
  // threshold, it's a bot or The Flash.
const timestamp = formData.get("formTimestamp");
  if (timestamp) {
    const formLoadTime = parseInt(timestamp.toString(), 10);
    const submissionTime = Date.now();
    const timeDifference = submissionTime - formLoadTime;

    if (timeDifference < MIN_SUBMISSION_TIME_MS) {
      console.warn(`Spam detected (time-trap): Submission took ${timeDifference}ms.`);
      return { success: true, message: "Thank you for your submission!" };
    }
  } else {
    // If the timestamp is missing entirely, it's suspicious.
    console.warn("Spam detected (time-trap): Timestamp field was missing.");
    return { success: true, message: "Thank you for your submission!" };
  }

  // Validation
  const validatedFields = contactFormSchema.safeParse({
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.issues[0]?.message ?? "Invalid data.",
    };
  }

  const { email: senderEmail, message } = validatedFields.data;

  // API Call
  try {
    await resend.emails.send({
      from: fromEmail, 
      to: toEmail,
      subject: "Message from Oxypteros Portfolio",
      replyTo: senderEmail,
      react: ContactFormEmail({ senderEmail, message }) as React.ReactElement,
    });

    return { success: true, message: "Your message has been sent!" };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
};