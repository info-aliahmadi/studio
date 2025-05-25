
"use server";

import { z } from "zod";
// For server-side translations in Server Actions, you might need getTranslations
// import { getTranslations } from 'next-intl/server';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

// If you need to use translations in server actions, pass the locale
// or use getTranslations if your setup supports it for Server Components/Actions.
export async function submitContactForm(
  // locale: string, // Example: if you pass locale to the action
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  // const t = await getTranslations({locale, namespace: 'ContactForm'}); // Example
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      // message: t('invalidData'), // Example
      message: "Invalid form data.",
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  console.log("Form data submitted:", parsed.data);
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    // message: t('successMessage'), // Example
    message: "Thank you for your message! We'll get back to you soon.",
    success: true,
  };
}
