import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '../store';
import { loadingActions } from '../store/modules/loading';

function useFetch<T>(fn: () => Promise<T[] | T>) {
  const [data, setData] = useState<T[] | T>();
  const dispatch = useAppDispatch();

  const fetchData = useCallback(async () => {
    dispatch(loadingActions.loading());
    const docs = await fn();
    if (Array.isArray(docs)) {
      setData([...docs]);
    } else {
      setData(docs);
    }
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
