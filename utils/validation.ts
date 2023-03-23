
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function getPasswordStrength(password: string, errorMessage = false) {
  if (password.length < 8) {
    if (errorMessage) {
      return "Password must be at least 8 characters or more";
    }
    return "not-enough";
  } else if (/^\d+$/.test(password)) {
    if (errorMessage) {
      return "";
    }
    return "weak";
  } else if (
    /^[a-zA-Z\d!@$#%&]*(([a-zA-Z][\d])|([\d][a-zA-Z]))+[a-zA-Z\d!@$#%&]*$/g.test(
      password
    )
  ) {
    if (errorMessage) {
      return "";
    }
    return "very-strong";
  } else if (/^[a-zA-Z\d!@$#%&]+$/.test(password)) {
    if (errorMessage) {
      return "";
    }
    return "strong";
  } else {
    return "invalid";
  }
}

export const containsSpecialChar = (str: string): string | null =>
  /[\s~`!@#$%^&*()+=\-[\]\\';,/{}|\\":<>?\d]/g.test(str)
    ? "Password cannot contain any special characters."
    : null;
