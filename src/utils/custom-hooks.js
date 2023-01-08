import { useEffect, useState } from 'react';
 
export const useOutsideClick = (ref, callback) => {
  const handleClick = (evt) => {
    if (ref.current && !ref.current.contains(evt.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export const debounce = (value, time) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, time);
    return () => {
      clearTimeout(handler); 
    };
  }, [value])
return debouncedValue;
}