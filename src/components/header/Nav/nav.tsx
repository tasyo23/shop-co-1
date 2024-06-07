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
      <ul className="flex container lg:w-max mx-auto ">
        <li className="mx-3">
          <Link href="#">Shop</Link>
        </li>
        <li className="mx-3">
          <Link href="#">On Sale</Link>
        </li>
        <li className="mx-3">
          <Link href="#">New Arrivals</Link>
        </li>
        <li className="mx-3">
          <Link href="#">Brands</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
