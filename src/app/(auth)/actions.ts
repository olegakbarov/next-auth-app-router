"use server";

import z from "zod";
import { redirect } from "next/navigation";
// import { signIn } from "next-auth/react";
import { AuthError } from "next-auth";
import { signIn } from "@/app/(auth)/auth";

export type SignInActionData = {
  error?: {
    code: "AUTH_ERROR" | "INTERNAL_ERROR";
    message: string;
  };
};

const UserSchema = z.object({
  email: z.string().email(),
  next: z.enum(["/", "/dashboard"]).optional().default("/"),
});

export async function signInAction(
  _prevState: any,
  formData: FormData,
): Promise<SignInActionData | void> {
  const input = UserSchema.safeParse({
    email: formData.get("email"),
    next:
      formData.get("next") ||
      undefined /* <input type=hidden value=''> should become the default next */,
  });

  if (!input.success) {
    return {
      error: {
        code: "AUTH_ERROR",
        message: "Auth failed. Check your credentials",
      },
    };
  }

  try {
    await signIn("credentials", {
      email: input.email,
      redirect: false,
    });
  } catch (err) {
    if (err instanceof AuthError) {
      return {
        error: {
          code: "AUTH_ERROR",
          message: "Auth failed. Check your credentials",
        },
      };
    } else {
      console.error("signIn error", err);
      return {
        error: {
          code: "INTERNAL_ERROR",
          message: "Server error. Please try again later",
        },
      };
    }
  }

  redirect(input.data.next);
}
