import Link from 'next/link'
import Logo from './Logo'

const Header = () => {
    return (
        <header className="flex w-full max-w-[1140px] items-center justify-between py-6">
            <Logo />
            <div className="flex w-1/2 max-w-[1024px] items-center justify-evenly text-sm text-gray-950">
                <Link href="/" className="hover:text-primary">
                    Home
                </Link>
                <Link href="/dashboard" className="hover:text-primary">
                    Features
                </Link>
                <Link href="/" className="hover:text-primary">
                    Princing
                </Link>
                <Link href="/" className="hover:text-primary">
                    Company
                </Link>
            </div>
            <button className="rounded-[10px] bg-[#E9E3FF] px-4 py-3 text-sm font-bold text-primary hover:bg-purple-100">
                Sign Up
            </button>
        </header>
    )
}

export default Header
