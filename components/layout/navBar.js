import Link from "next/link"

export default function Navbar() {
    return (
        <nav style={{width: "100%", display: "flex", justifyContent: "space-around", fontSize: "2"}}>
            <Link href={"/"}>Dogshop</Link>
            <Link href={"/about"}>Pick a Dog</Link>
            <Link href={"/pokemon/pokemon"}>About</Link>
        </nav>
    )
}
