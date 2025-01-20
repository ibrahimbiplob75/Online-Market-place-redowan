import React from 'react';
import { NavLink } from 'react-router-dom';

const List = () => {
    return (
      <>
        {/* Men Category */}
          <li className="group relative">
            <a>Men</a>
            <ul className="menu menu-compact absolute hidden group-hover:block w-96 mt-9  bg-base-100 rounded-box shadow-lg p-2 z-[50]">
              <li>
                <a>Shirts</a>
              </li>
              <li>
                <a>Jeans</a>
              </li>
            </ul>
          </li>

          {/* Women Category */}
          <li className="group relative">
            <a>Women</a>
            <ul className="menu menu-compact absolute hidden group-hover:block w-96 mt-9 bg-base-100 rounded-box shadow-lg p-2 z-[50]">
              <li>
                <a>Dresses</a>
              </li>
              <li>
                <a>Handbags</a>
              </li>
            </ul>
          </li>

          {/* Kids Category */}
          <li className="group relative">
            <a>Kids</a>
            <ul className="menu menu-compact absolute hidden group-hover:block w-96 mt-9 bg-base-100 rounded-box shadow-lg p-2 z-[50]">
              <li>
                <a>Toys</a>
              </li>
              <li>
                <a>Clothing</a>
              </li>
            </ul>
          </li>

          {/* All Collections */}
          <li className="group relative">
            <a>All Collections</a>
            <ul className="menu menu-compact absolute hidden group-hover:block w-96 mt-9 bg-base-100 rounded-box shadow-lg p-2 z-[50]">
              <li>
                <a>Toys</a>
              </li>
              <li>
                <a>Clothing</a>
              </li>
              <li>
                <a>Dresses</a>
              </li>
              <li>
                <a>Handbags</a>
              </li>
              <li>
                <a>Shirts</a>
              </li>
              <li>
                <a>Jeans</a>
              </li>
            </ul>
          </li>
      </>
    );
};

export default List;