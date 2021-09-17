import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import navigations from '../../common/navigations';
import suggestions from '../../common/suggestions';
import logo from '../../assets/img/logo.svg';
import TheNavigation from '../Common/TheNavigation';

const TheSearchbar: React.FC = (props): JSX.Element => {
  const [searchString, setSearchString] = useState('');

  const chooseSuggestion = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const target = event.target as HTMLLIElement;
    setSearchString(target.innerText);
  };

  const changeSearchString = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };
  return (
    <div className="bg-background text-text font-bold w-full py-5 px-20 flex">
      <div className="w-max flex flex-col items-center justify-center gap-2">
        <img src={logo} alt="Logo" width="50px" />
        <h1>EDDIE</h1>
      </div>
      <div className="searchbar">
        <div className="flex items-center">
          <input type="text" placeholder="Bạn muốn tìm gì?" value={searchString} onChange={changeSearchString} onBlur={changeSearchString} />
          <div role="button" className="bg-primary p-2 rounded-md cursor-pointer transform -translate-x-full ">
            <FontAwesomeIcon icon="search" color="#ffffff" />
          </div>
        </div>
        <ul className="list-none inline-flex italic font-thin text-xs mt-2 gap-2">
          {suggestions.map((s) => (
            <li key={s} role="menuitem" onClick={chooseSuggestion} aria-hidden="true" className="cursor-pointer text-blue-500 underline">
              {s}
            </li>
          ))}
        </ul>
      </div>
      <TheNavigation className="-ml-60 gap-8 font-medium" items={navigations} position="end" size="sm" direction="vertical"></TheNavigation>
    </div>
  );
};

export default TheSearchbar;
