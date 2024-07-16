'use client'
import Header from '@/components/Header'
import { signIn, signOut, useSession } from 'next-auth/react'
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const SignIn = () => {
    const { data: session } = useSession()

    return (
        <>
            <Header />
            <h1>Sign In</h1>
            {session ? (
                <>
                    <h1>Welcome Back {session.user?.name}</h1>
                    <button onClick={() => signOut({ callbackUrl: '/' })}>
                        Sign Out
                    </button>
                </>
            ) : (
                <>
                    <h1>You are not logged in</h1>
                    <div className="flex h-10 w-full max-w-md flex-col gap-3">
                        <button
                            onClick={() =>
                                signIn('github', { callbackUrl: '/dashboard' })
                            }
                            className="flex h-10 w-full items-center justify-center rounded-lg bg-gray-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-100 ease-in hover:bg-gray-700"
                        >
                            <FaGithub className="mr-3 h-5 w-5" />
                            Sign in with GitHub
                        </button>
                        <button
                            onClick={() =>
                                signIn('facebook', {
                                    callbackUrl: '/dashboard',
                                })
                            }
                            className="flex w-full items-center justify-center rounded-lg bg-[#1877f2] px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-100 ease-in hover:bg-blue-700"
                        >
                            <FaFacebook className="mr-3 h-5 w-5" />
                            Sign in with Facebook
                        </button>
                        <button
                            onClick={() =>
                                signIn('github', { callbackUrl: '/dashboard' })
                            }
                            className="text-dark flex w-full items-center justify-center rounded-lg bg-slate-50 px-4 py-2 text-center text-base font-semibold shadow-md transition duration-100 ease-in hover:bg-slate-200"
                        >
                            <FaInstagram className="mr-3 h-5 w-5" />
                            Sign in with Instagram
                        </button>
                        <button
                            onClick={() =>
                                signIn('github', { callbackUrl: '/dashboard' })
                            }
                            className="flex w-full items-center justify-center rounded-lg bg-black px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-100 ease-in hover:bg-gray-900"
                        >
                            <FaXTwitter className="mr-3 h-5 w-5" />
                            Sign in with X
                        </button>
                    </div>
                </>
            )}
        </>
    )
}

export default SignIn
