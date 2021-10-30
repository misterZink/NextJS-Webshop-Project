import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="w-full flex justify-end  text-lg h-16 items-center pr-4 bg-blue-900 text-white">
            <Link passHref href={"/"}><a className="rounded p-2 mr-4 cursor-pointer hover:bg-blue-600">Dogshop</a></Link>
            <Link passHref href={"/pickadog"}><a className="rounded p-2 mr-4 cursor-pointer hover:bg-blue-600">Pick a dog</a></Link>
            <Link passHref href={"/varukorg"}><a className="rounded p-2 mr-4 cursor-pointer hover:bg-blue-600">Basket</a></Link>
        </nav>
    )
}
