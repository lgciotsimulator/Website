import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Resolves image paths to work correctly with the BASE_URL
 * Converts absolute paths like "/images/..." to relative paths
 */
export function resolveImagePath(imagePath: string): string {
  const baseUrl = import.meta.env.BASE_URL;
  
  // If the path already starts with the baseUrl or is a relative path, return as-is
  if (imagePath.startsWith('http') || imagePath.startsWith('data:')) {
    return imagePath;
  }
  
  // Remove leading slash if present and append to baseUrl
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  const resolvedPath = `${baseUrl}${cleanPath}`;
  
  console.log('Resolving image path:', imagePath, '->', resolvedPath);
  
  return resolvedPath;
}
