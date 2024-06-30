import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";

interface NavProps {
  className?: string;
  id?: string;
  isShow?: boolean;
}

const Nav: FunctionComponent<NavProps> = ({ className, id }) => {
  return (
    <nav className={className} id={id}>
      <ul className="flex flex-col lg:flex-row container lg:w-max mx-auto ">
        <li className="mx-3 mb-3 lg:mb-0">
          <Link href="/shop">Shop</Link>
        </li>
        <li className="mx-3 mb-3 lg:mb-0">
          <Link href="#">On Sale</Link>
        </li>
        <li className="mx-3 mb-3 lg:mb-0">
          <Link href="#">New Arrivals</Link>
        </li>
        <li className="mx-3 mb-3 lg:mb-0">
          <Link href="#">Brands</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
