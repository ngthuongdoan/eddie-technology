import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '../store';
import { loadingActions } from '../store/modules/loading';

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
