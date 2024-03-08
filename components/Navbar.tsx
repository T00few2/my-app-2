import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">

    <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer"
    />
    <Link href="/">
        <Image src="/DZRlogo.jpg" alt="logo" width={70} height={29}/>
    </Link>




    </nav>
  )
}

export default Navbar