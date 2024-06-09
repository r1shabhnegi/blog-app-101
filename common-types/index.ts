import { z } from "zod";
// signup
export const signupInput = z.object({
  name: z
    .string()
    .min(4, { message: "Must be 4 or more characters long" })
    .max(20, { message: "Must be 20 or fewer characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(4, { message: "Must be 4 or more characters long" })
    .max(20, { message: "Must be 20 or fewer characters long" }),
});

export type signupType = z.infer<typeof signupInput>;

// signin
export const signinInput = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string(),
});

export type SigninType = z.infer<typeof signinInput>;

// Edit user information
const MAX_FILE_SIZE = 1000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  // "image/webp",
];
export const EditUserInfoInput = z.object({
  avatar: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 1MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg and .png formats are supported."
    ),
  name: z
    .string()
    .min(4, { message: "Must be 4 or more characters long" })
    .max(20, { message: "Must be 20 or fewer characters long" }),

  bio: z.string().max(160, { message: "Must be 160 or fewer characters long" }),
});

export type EditUserInfoType = z.infer<typeof EditUserInfoInput>;
