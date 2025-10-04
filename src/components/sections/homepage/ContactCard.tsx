// src/components/sections/homepage/ContactCard.tsx
"use client";

import { HomeContactForm } from "@/components/forms/HomeContactForm";
import { Link } from "@/components/ui/link";
import { Icon } from "@/components/ui/icon";

const isAvailableForFreelance = true;

const availabilityText = isAvailableForFreelance
  ? "I'm currently available for freelance projects, collaborative work, or just to chat."
  : "I'm currently focused on my full-time role, but I'm always open to discussing future collaborations or just to chat.";

const ObfuscatedMailtoLink = (): React.JSX.Element => {
  const emailUser = "hello";
  const emailDomain = "oxypteros.com";

  return (
    <div className="flex items-center gap-2">
      <Icon name="mail" className="size-4 stroke-gray-700" />
      <Link
        variant="plain"
        href={`mailto:${emailUser}@${emailDomain}`}
        isExternal
        showExternalIcon={false}
      >
        <span>
          {emailUser}
          <span aria-hidden="true">@</span>
          <span className="sr-only">(at)</span>
          {emailDomain}
        </span>
      </Link>
    </div>
  );
};

const ContactNarrative = (): React.JSX.Element => (
  <div className="flex w-full max-w-96 flex-col items-start space-y-4">
    <div className="text-base">
      <ObfuscatedMailtoLink />
    </div>
    <div className="space-y-2 text-sm text-gray-800">
      <p>
        I believe the best digital experiences are written, not just assembled.
      </p>
      <p>
        Whether through code that provides structure or copy that gives it a
        voice, my mission is to translate your vision into a clean and
        intentional narrative for your users.
      </p>
    </div>
  </div>
);

export const ContactCard = (): React.JSX.Element => {
  return (
    <div className="mt-42 flex w-full flex-col">
      <h3 className="inter-heading text-lg text-gray-900 sm:text-xl md:text-2xl xl:text-3xl xl:font-extralight">
        Let&apos;s <em>write</em> something exceptional.
      </h3>
      <p className="inter-heading text-sm text-gray-700 md:text-lg md:font-light">
        {availabilityText}
      </p>
      <div className="mt-12 flex w-full flex-col gap-24 md:flex-row">
        <div className="w-full max-w-96 shrink-0 grow">
          <HomeContactForm />
        </div>
        <ContactNarrative />
      </div>
    </div>
  );
};
