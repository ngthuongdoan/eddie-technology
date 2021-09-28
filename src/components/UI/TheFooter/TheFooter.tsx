import React, { useMemo } from 'react';
import footerMenu from '@app/common/footerMenu';

const TheFooter: React.FC = (): JSX.Element => {
  const menuGenerated = useMemo<JSX.Element[]>(() => {
    return footerMenu.map((menu) => (
      <ul key={menu.id}>
        <h3 className="text-base mb-4 font-bold">{menu.title}</h3>
        {menu.children.map((child) => (
          <li className="text-sm my-2" key={child.id}>
            {child.title}
          </li>
        ))}
      </ul>
    ));
  }, []);

  return (
    <footer className="bg-primary text-background flex w-full px-20 py-14 justify-between items-start">
      {menuGenerated}
      <div>
        <h3 className="text-base mb-4 font-bold">Vị trí</h3>
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.847498742448!2d105.76271981406549!3d10.029440575280258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0883c22dbfd83%3A0xa8dfbf86ef103db1!2zWHXDom4gS2jDoW5oLCBOaW5oIEtp4buBdSwgQ-G6p24gVGjGoSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1631795400794!5m2!1svi!2s"
          width="400"
          height="250"
          loading="lazy"
          // eslint-disable-next-line react/jsx-closing-tag-location
        ></iframe>
      </div>
    </footer>
  );
};

export default TheFooter;
