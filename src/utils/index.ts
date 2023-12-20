import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function doesUrlMatch(paths: Array<string>, currentUrl: string) {

  const regexps = paths.map(path => {      
      const pattern = path.replace('*', '.*');
      return new RegExp('^' + pattern + '$');
  });
  
  return regexps.some(regexp => regexp.test(currentUrl));
}

export function getInitialsFromFirstAndLastName(firstName: string | null, lastName: string | null) {
  if (!firstName || !lastName) return ''
  return `${firstName.charAt(0)}${lastName.charAt(0)}`
}

export function getAvatarColour(name: string) {
  const initial = name.slice(0, 1).toLowerCase();

  if (/[a-d]/i.test(initial)) return "bg-red-200 text-red-900"
  if (/[e-h]/i.test(initial)) return "bg-green-200 text-green-900"
  if (/[i-l]/i.test(initial)) return "bg-yellow-200 text-yellow-900"
  if (/[m-q]/i.test(initial)) return "bg-blue-200 text-blue-900"
  if (/[r-t]/i.test(initial)) return "bg-indigo-200 text-indigo-900"
  if (/[u-w]/i.test(initial)) return "bg-purple-200 text-purple-900"
  if (/[x-z]/i.test(initial)) return "bg-pink-200 text-pink-900"
  
  return "bg-gray-200 text-gray-900"
};

export function pluarise(string: string, data: any) {
  return data.length > 1 ? `${string}s` : string
}

export function truncateString(string: string, length: number) {
  if (string.length <= length) return string
  return string.slice(0, length) + '...'
}

export function createSlug(string: string | null) {
  if (!string) return ''
  const slug = string.toLowerCase().replace(/ /g, '-') ;
  return slug
}

export function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  if (!value) return;
  const parts: Array<string> = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const part = parts.pop();
    if (!part) return null
    return part.split(';').shift();
  }
}

export const getRandomEmoji = () => {
  const baseEmojis = '😊🙃🤪🤓🤯😴💩👻👽🤖👾👐🖖✌️🤟🤘🤙👋🐭🦕🦖🐉';
  return baseEmojis[Math.floor(Math.random() * baseEmojis.length)]
}