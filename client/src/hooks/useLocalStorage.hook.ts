import { useSyncExternalStore } from 'react';

type ReturnType<T> = [T, (value: T) => void];

export function useLocalStorage<T>(key: string, initialValue: T): ReturnType<T> {
  const getItem = (key: string, initialValue: T): T => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  };

  const setItem = (key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new StorageEvent('storage', { key }));
  };

  const getSnapshot = (): T => getItem(key, initialValue);

  const setValue = (newValue: T): void => setItem(key, newValue);

  const subscribe = (listener: () => void): (() => void) => {
    window.addEventListener('storage', listener);
    return () => window.removeEventListener('storage', listener);
  };

  const value = useSyncExternalStore(subscribe, getSnapshot);

  return [value, setValue];
}
