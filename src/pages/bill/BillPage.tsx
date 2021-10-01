import Button from '@components/UI/Button/Button';
import LoadingOverlay from '@components/UI/LoadingOverlay/LoadingOverlay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch } from '@hooks/use-app-dispatch';
import { CartwithCode } from '@model/Cart';
import { getCart } from '@services/cart.service';
import React, { useState, useRef } from 'react';
import { useAlert } from 'react-alert';
import BillInformation from './BillInformation';

interface Props {}

const BillPage: React.FC<Props> = (props): JSX.Element => {
  const codeRef = useRef<HTMLInputElement>(null);

  const alert = useAlert();
  const [cart, setCart] = useState<CartwithCode | undefined>();
  const [isExist, setIsExist] = useState(false);
  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const code = codeRef.current!.value;
    try {
      const fetchCart = await getCart(code);
      setIsExist(true);
      setCart(fetchCart);
    } catch (e) {
      alert.error('Không tìm thấy');
      setIsExist(false);
    }
  };
  return (
    <div className="bg-white w-full px-10 py-5 min-h-screen">
      <div>
        <form onSubmit={handleSearch} className="w-full">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="font-bold text-lg " htmlFor="code">
            Mã HD
          </label>
          <div className="flex">
            <input className="w-full bg-gray-100 border rounded-sm px-3 py-2" id="code" name="code" type="text" ref={codeRef} />
            <Button className="bg-primary p-2 rounded-md cursor-pointer" type="submit" onClick={() => {}}>
              <FontAwesomeIcon icon="search" color="#ffffff" />
            </Button>
          </div>
        </form>
      </div>
      {cart && isExist && <BillInformation cart={cart}></BillInformation>}
    </div>
  );
};

export default BillPage;
