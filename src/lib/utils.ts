import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isPrime(value: number): boolean {
  if (!Number.isInteger(value) || value < 2) {
    return false
  }

  if (value === 2) {
    return true
  }

  if (value % 2 === 0) {
    return false
  }

  const limit = Math.sqrt(value)
  for (let i = 3; i <= limit; i += 2) {
    if (value % i === 0) {
      return false
    }
  }

  return true
}
