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
            <div className="flex w-1/2 max-w-[1024px] items-center justify-center gap-12 text-sm font-normal text-black">
                <Link href="/" className="hover:text-primary">
                    Product
                </Link>
                <Link
                    href={status === 'unauthenticated' ? '/' : '/dashboard'}
                    className="hover:text-primary"
                >
                    Features
                </Link>
                <Link href="/" className="hover:text-primary">
                    Pricing
                </Link>
                <Link href="/" className="hover:text-primary">
                    Company
                </Link>
            </div>
            <div className="flex h-full items-center gap-5">
                <Link
                    href="/"
                    className="text-sm font-normal text-black hover:text-primary"
                >
                    Log In
                </Link>
                {!session ? (
                    <Link
                        href="/"
                        className="h-10 rounded-[10px] bg-[#E9E3FF] px-4 text-sm font-bold leading-10 text-primary hover:bg-purple-100"
                    >
                        Sign Up
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
                        <Link href="/signin" className="font-bold text-primary">
                            {session.user?.name}
                        </Link>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
