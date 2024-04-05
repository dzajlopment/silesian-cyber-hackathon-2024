import {type ClassValue, clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

// Function to merge and apply Tailwind CSS classes
export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)); // Merging and applying Tailwind CSS classes using clsx and twMerge
}
