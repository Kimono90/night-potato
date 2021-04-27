import { useEffect } from 'react';

export function useDynamicPageTitle(): void {
  useEffect(() => {
    window.addEventListener('focus', onFocus);
    window.addEventListener('blur', onBlur);
    return () => {
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('blur', onBlur);
    };
  }, []);

  const onFocus = () => {
    document.title = 'Night Potato';
  };

  const onBlur = () => {
    document.title = 'Miss you :(';
  };
}
