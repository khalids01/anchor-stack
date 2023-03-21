import { z } from "zod";

const emailSchema = z.string().email();
const passwordSchema = z
  .string()
  .min(8)
  .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

export function validateEmail(email: string) {
  try {
    emailSchema.parse(email);
    return true;
  } catch (error) {
    return false;
  }
}

export function validatePassword(password: string) {
  try {
    passwordSchema.parse(password);
    return true;
  } catch (error) {
    return false;
  }
}

// export function getPasswordStrength(password: string, errorMessage = false) {
//   if (password.length < 8) {
//     if (errorMessage) {
//       return "Password must be at least 8 characters or more";
//     }
//     return "not-enough";
//   } else if (/^\d+$/.test(password)) {
//     return "weak";
//   } else if (/^[a-zA-Z\d!@$#%&]+$/.test(password)) {
//     return "strong";
//   } else if (
//     /^[a-zA-Z\d!@$#%&]*(([a-zA-Z][\d])|([\d][a-zA-Z]))+[a-zA-Z\d!@$#%&]*$/g.test(password)
//   ) {
//     return "very-strong";
//   }
//   //  else if (/[\s~`!@#$%^&*()+=\-[\]\\';,/{}|\\":<>?\d]/g.test(password)) {
//   //   if (errorMessage) {
//   //     return "Password cannot contain any special characters.";
//   //   }

//   //   return "invalid";
//   // }
// }

export function getPasswordStrength(password: string, errorMessage = false) {
  if (password.length < 8) {
    if (errorMessage) {
      return "Password must be at least 8 characters or more";
    }
    return "not-enough";
  } else if (/^\d+$/.test(password)) {
    return "weak";
  } else if (/^[a-zA-Z\d!@$#%&]*(([a-zA-Z][\d])|([\d][a-zA-Z]))+[a-zA-Z\d!@$#%&]*$/g.test(password)) {
    return "very-strong";
  } else if (/^[a-zA-Z\d!@$#%&]+$/.test(password)) {
    return "strong";
  } else {
    return "invalid";
  }
}

export const containsSpecialChar = (str: string): string | null =>
  /[\s~`!@#$%^&*()+=\-[\]\\';,/{}|\\":<>?\d]/g.test(str)
    ? "Password cannot contain any special characters."
    : null;
