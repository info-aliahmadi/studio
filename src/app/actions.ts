
"use server";

import { z } from "zod";

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

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data.",
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  // Simulate API call or email sending
  console.log("Form data submitted:", parsed.data);
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Example of potential error from backend
  // if (parsed.data.email.includes("error@example.com")) {
  //   return {
  //     message: "Failed to send message. Please try again later.",
  //     success: false,
  //   };
  // }

  return {
    message: "Thank you for your message! We'll get back to you soon.",
    success: true,
  };
}
