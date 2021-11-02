import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-end  text-lg h-16 items-center pr-4 bg-blue-900 text-white">
      <Link passHref href={"/"}>
        <a className="hover:scale-110 transition duration-500 ease-in-out; mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center Link mr-2">
          Dogshop
        </a>
      </Link>
      <Link passHref href={"/pickadog"}>
        <a className="hover:scale-110 transition duration-500 ease-in-out; mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center Link mr-2">
          Pick a dog
        </a>
      </Link>
      <Link passHref href={"/varukorg"}>
        <a className="hover:scale-110 transition duration-500 ease-in-out; mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center Link mr-2">
          Basket
        </a>
      </Link>
    </nav>
  );
}
