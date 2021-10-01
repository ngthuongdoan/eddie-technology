import React from 'react';

const RequiredField = () => {
  return <span className="text-red-500">(*)</span>;
};

export default React.memo(RequiredField);
