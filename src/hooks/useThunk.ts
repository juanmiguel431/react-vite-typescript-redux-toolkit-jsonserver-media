import { useCallback, useState } from 'react';

const useThunk = (thunk: (...args: any[]) => Promise<any>): [(...args: any[]) => Promise<any>, boolean, Error | null] => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const runThunk = useCallback(async (...args: any[]) => {
    setIsLoading(true);

    thunk(...args)
      .unwrap()
      .catch(e => setError(e))
      .finally(() => setIsLoading(false));
  }, [thunk]);

  return [runThunk, isLoading, error];
}

export default useThunk;
