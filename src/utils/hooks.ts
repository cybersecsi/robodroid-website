import { useEffect, RefObject } from 'react';

export const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: (event: MouseEvent) => void,
) => {
  useEffect(
    () => {
      const listener = (e: Event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || (e.target !== null && ref.current.contains(e.target as Node))) {
          return;
        }
        handler(e as MouseEvent);
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler],
  );
};
