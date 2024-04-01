import logoWhite from "../../assets/logo-light.svg"
import React from "react"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className="h-24 bg-brown/90 backdrop-blur-sm text-brand fixed top-0 right-0 w-full z-50">
      <nav className="flex items-center justify-between h-full">
        <Link href="/">
          <Image src={logoWhite} alt="Logo Image" width="50" height="50" />
        </Link>
      </nav>
      <Link href="/about">About</Link>
    </header>
  )
}

export default Header
