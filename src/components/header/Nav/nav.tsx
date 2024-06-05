import Link from "next/link";
import { FunctionComponent } from "react";

interface NavProps {}

const Nav: FunctionComponent<NavProps> = () => {
  return (
    <nav>
      <ul className="flex">
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
