import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Resolves image paths to work correctly with the BASE_URL
 * Converts absolute paths like "/images/..." to relative paths and encodes them properly
 */
export function resolveImagePath(imagePath: string): string {
  const baseUrl = import.meta.env.BASE_URL;
  
  // If the path already starts with the baseUrl or is a relative path, return as-is
  if (imagePath.startsWith('http') || imagePath.startsWith('data:')) {
    return imagePath;
  }
  
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // Encode the path to handle spaces and special characters
  const encodedPath = cleanPath.split('/').map(segment => encodeURIComponent(segment)).join('/');
  
  return `${baseUrl}${encodedPath}`;
}
