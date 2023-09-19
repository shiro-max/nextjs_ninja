import Image from 'next/image'
import Link from 'next/link'
import Logo from './../componets/shiro.png'

export default function Navbar() {
    return (
        <nav>
            <Image
            src={Logo}
            alt='deskhelper shiro logo'
            width={40}
            quality={100}
            />
            <h1>Shiro HelpDesk</h1>
            <Link href="/" className=' hover:text-purple-600'>Dashboard</Link>
            <Link href="/tickets" className=' hover:text-purple-600'>tickets</Link>
            <Link href="/tickets/create" className=' hover:text-purple-600'>Create</Link>
        </nav>
    )
}
