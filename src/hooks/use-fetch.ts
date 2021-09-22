import React, { useCallback, useEffect, useState } from 'react';

function useFetch<T>(fn: () => Promise<T[]>) {
  const [data, setData] = useState<T[]>();

  const fetchData = useCallback(async () => {
    const docs = await fn();
    setData([...docs]);
  }, [fn]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    fetchData,
    data,
  };
}

export default useFetch;
