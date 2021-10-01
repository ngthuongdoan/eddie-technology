/* eslint-disable jsx-a11y/label-has-associated-control */
import { RootState } from '@model/ReduxType';
import CheckoutInformation from '@pages/cart/CheckoutInformation';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import RequiredField from '@components/Common/RequiredField/RequiredField';
import { useAppDispatch } from '@hooks/use-app-dispatch';
import { Cart, CustomerInformation } from '@model/Cart';
import { cartActions } from '@store/modules/cart/reducer';
import { addNewCheckout } from '@services/cart.service';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import Button from '@components/UI/Button/Button';

const schema = yup
  .object({
    fullName: yup.string().required('Đây là trường bắt buộc'),
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
  const history = useHistory();
  const cart = useSelector<RootState>((state) => state.cart) as Cart;
  const dispatch = useAppDispatch();
  const alert = useAlert();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerInformation>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<CustomerInformation> = async (data) => {
    await dispatch(cartActions.setCustomerInformation(data));
    await addNewCheckout(cart);
    await dispatch(cartActions.resetCart());
    localStorage.removeItem('cart');
    alert.show('Đặt hàng thành công', {
      timeout: 2000,
      type: 'success',
      onClose: () => {
        history.push('/');
      },
    });
  };

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
          <Button onClick={() => {}} type="submit" form="userInformation" className="bg-red-700 text-white font-bold text-base w-1/2 py-2">
            Đặt mua
          </Button>
        </div>
        <CheckoutInformation isCheckout={true} products={cart.products} className="w-4/12"></CheckoutInformation>
      </div>
    </div>
  );
};

export default CheckoutPage;
