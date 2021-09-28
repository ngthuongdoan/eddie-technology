import React, { useCallback, useEffect, useState } from 'react';
import { loadingActions } from '@store/modules/loading/reducer';
import { useAppDispatch } from './use-app-dispatch';

function useFetch<T>(fn: () => Promise<T>) {
  const [data, setData] = useState<T>();
  const dispatch = useAppDispatch();

  const fetchData = useCallback(async () => {
    dispatch(loadingActions.loading());
    const docs = await fn();
    setData(docs);
    dispatch(loadingActions.loaded());
  }, [fn, dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    fetchData,
    data,
  };
}

export default useFetch;
