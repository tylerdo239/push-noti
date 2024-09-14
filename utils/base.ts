import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// remove px from string : 75px ;-;
export function handleWidthCss(value: string) {
  return +value.slice(0, -2);
}

// generate a unique Key
export const generateKey = (pre = '') => {
  return `${pre}_${new Date().getTime()}`;
};

// cn (clsx + twMerge)
export function cn(...inputs: any) {
  return twMerge(clsx(inputs));
}

// debounce a function (avoid a lot of click in 1 time)
export function debounce(fn: any, delay = 500) {
  let timerId: any;
  return () => {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
    timerId = setTimeout(() => {
      fn();
    }, delay);
  };
}

// Convert the VAPID key
export function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
