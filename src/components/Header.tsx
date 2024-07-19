'use client'
import Link from 'next/link'
import Logo from './Logo'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

const Header = () => {
    const { data: session, status } = useSession()
    return (
        <header className="flex w-full max-w-[1140px] items-center justify-between py-6">
            <Logo />
            <div className="flex w-1/2 max-w-[1024px] items-center justify-evenly text-sm text-gray-950">
                <Link href="/" className="hover:text-primary">
                    Home
                </Link>
                <Link
                    href={status === 'unauthenticated' ? '/' : '/dashboard'}
                    className="hover:text-primary"
                >
                    Features
                </Link>
                <Link href="/pricing" className="hover:text-primary">
                    Princing
                </Link>
                <Link href="/company" className="hover:text-primary">
                    Company
                </Link>
            </div>
            {!session ? (
                <Link
                    href="/signin"
                    className="rounded-[10px] bg-[#E9E3FF] px-4 py-3 text-sm font-bold text-primary hover:bg-purple-100"
                >
                    Sign In
                </Link>
            ) : (
                <div className="flex items-center gap-2">
                    <Image
                        src={session.user?.image as string}
                        width={40}
                        height={40}
                        alt="avatar"
                        className="rounded-full"
                    />
                    <Link
                        href="/signin"
                        className="text-sm font-bold text-primary"
                    >
                        {session.user?.name}
                    </Link>
                </div>
            )}
        </header>
    )
}

export default Header
