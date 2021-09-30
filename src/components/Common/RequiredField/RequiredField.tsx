import React from 'react';

interface Props {}

const RequiredField = (props: Props) => {
  return <span className="text-red-500">(*)</span>;
};

export default RequiredField;
