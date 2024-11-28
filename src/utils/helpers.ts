import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...args: ClassValue[]) => twMerge(clsx(args));

export const stringReduce = (string: string, length: number) => {
  return string?.length > length
    ? string?.substring(0, length) + "..."
    : string;
};

export const serialize = <T extends Record<string, unknown>>(object: T): string => {
  const str: string[] = [];
  for (const p in object) {
    if (Object.prototype.hasOwnProperty.call(object, p)) {
      const value = object[p]; 
      if (value !== undefined && (value || typeof value === "boolean" || value === null)) {
        str.push(`${encodeURIComponent(p)}=${encodeURIComponent(String(value))}`);
      }
    }
  }

  return str.join("&");
};