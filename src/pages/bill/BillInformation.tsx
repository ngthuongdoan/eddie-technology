import { CartwithCode } from '@model/Cart';
import CheckoutInformation from '@pages/cart/CheckoutInformation';
import React from 'react';

interface Props {
  cart: CartwithCode;
}

const BillInformation: React.FC<Props> = ({ cart }): JSX.Element => {
  return (
    <div className=" bg-white py-10 px-20">
      <div className="flex items-start w-full gap-10">
        <div className="flex-grow flex flex-col gap-y-3">
          <div>
            <h1 className="font-bold">Họ và tên</h1>
            <p>{cart.customer.fullName}</p>
          </div>
          <div>
            <h1 className="font-bold">SDT</h1>
            <p>{cart.customer.phone}</p>
          </div>
          <div>
            <h1 className="font-bold">Email</h1>
            <p>{cart.customer.email}</p>
          </div>
          <div>
            <h1 className="font-bold">Địa chỉ</h1>
            <p>{cart.customer.address}</p>
          </div>
        </div>
        <CheckoutInformation isCheckout={true} cart={cart} className="w-4/12"></CheckoutInformation>
      </div>
    </div>
  );
};

export default BillInformation;
