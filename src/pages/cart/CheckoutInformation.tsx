import { RootState } from '@model/ReduxType';
import { toCurrency } from '@utils/index';
import React from 'react';
import { useSelector } from 'react-redux';

interface Props {}

const CheckoutInformation: React.FC<Props> = (props): JSX.Element => {
  const total = useSelector<RootState>((state) => state.cart.total);
  return <>{toCurrency(total as number)}</>;
};

export default CheckoutInformation;
