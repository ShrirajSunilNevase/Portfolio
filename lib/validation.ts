import { z } from 'zod';
export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Enter a valid email address.'),
  subject: z.string().min(3, 'Please enter a subject.'),
  message: z.string().min(20, 'Please write at least 20 characters.'),
});
export type ContactValues = z.infer<typeof contactSchema>;
