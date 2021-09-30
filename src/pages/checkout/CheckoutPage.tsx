/* eslint-disable jsx-a11y/label-has-associated-control */
import { CartProduct } from '@model/Product';
import { RootState } from '@model/ReduxType';
import CheckoutInformation from '@pages/cart/CheckoutInformation';
import React from 'react';
import { useForm, SubmitHandler, Validate } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import RequiredField from '@components/Common/RequiredField/RequiredField';

interface IFormInputs {
  fullName: string;
  birth: Date;
  phone: string;
  address: string;
  email: string;
}
const schema = yup
  .object({
    fullName: yup.string().required('Đây là trường bắt buộc'),
    birth: yup.date().required('Đây là trường bắt buộc'),
    phone: yup
      .string()
      .trim()
      .matches(/^0([0-9]{9}$)/gi, 'Số điện thoại gồm 10 chữ số, bắt đầu bằng số 0')
      .required('Đây là trường bắt buộc'),
    address: yup.string().required('Đây là trường bắt buộc'),
    email: yup.string().email('Email không hợp lệ').required('Đây là trường bắt buộc'),
  })
  .required();

interface Props {}

const CheckoutPage: React.FC<Props> = (props): JSX.Element => {
  const products = useSelector<RootState>((state) => state.cart.products) as CartProduct[];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <div className=" bg-white py-10 px-20">
      <h1 className="font-bold text-2xl text-left">Thông tin giao hàng</h1>
      <hr className="h-1 bg-primary rounded-full my-4" />
      <div className="flex items-start w-full gap-10">
        <div className="flex-grow">
          <form className="form" id="userInformation" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="firstName">
                Họ và tên <RequiredField></RequiredField>
              </label>
              <input {...register('fullName')} />
              <p>{errors.fullName?.message}</p>
            </div>
            <div>
              <label htmlFor="birth">
                Ngày sinh <RequiredField></RequiredField>
              </label>
              <input type="date" {...register('birth')} />
              <p>{errors.birth?.message}</p>
            </div>
            <div>
              <label htmlFor="phone">
                SDT <RequiredField></RequiredField>
              </label>
              <input {...register('phone')} />
              <p>{errors.phone?.message}</p>
            </div>
            <div>
              <label htmlFor="email">
                Email <RequiredField></RequiredField>
              </label>
              <input {...register('email')} />
              <p>{errors.email?.message}</p>
            </div>
            <div>
              <label htmlFor="address">
                Địa chỉ <RequiredField></RequiredField>
              </label>
              <input {...register('address')} />
              <p>{errors.address?.message}</p>
            </div>
          </form>
          <button type="submit" form="userInformation" className="bg-red-700 text-white font-bold text-base w-1/2 py-2">
            Đặt mua
          </button>
        </div>
        <CheckoutInformation isCheckout={true} products={products} className="w-4/12"></CheckoutInformation>
      </div>
    </div>
  );
};

export default CheckoutPage;
