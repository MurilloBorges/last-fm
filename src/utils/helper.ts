import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

interface IErr {
  response: {
    status: number;
    data: {
      error: {
        message: string;
      };
    };
  };
}
export function error(err: IErr, message: string) {
  switch (err.response.status) {
    case 400:
      toast.error(err.response.data.error.message);
      break;

    case 500:
      toast.error('Serviço temporariamente indisponível');

      break;

    default:
      toast.error(message);
  }
}

export function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return debouncedValue;
}
