import React from 'react';
import { ProductProps } from '@app/model/Product';
import Specifications from '@app/model/Specifications';

const ProductSpecification: React.FC<ProductProps> = ({ product }): JSX.Element => {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-8">Thông số cấu hình</h1>
      <table className="specifications">
        {product.specifications.map((globalSpec) => (
          <>
            <thead key={globalSpec.title}>
              <tr className="header ">
                <th colSpan={2}>{globalSpec.title}</th>
              </tr>
            </thead>
            <tbody>
              {(globalSpec.value as Specifications[]).map((specs) => (
                <tr key={specs.title}>
                  <th>{specs.title}</th>
                  <td>
                    <ul>
                      {specs.value.map((s, index) => (
                        <li key={index}>{s}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </>
        ))}
      </table>
    </div>
  );
};

export default ProductSpecification;
