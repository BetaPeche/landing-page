'use client'
import Header from '@/components/Header'
import Loader from '@/components/Loader'
import { signIn, signOut, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

const Dashboard = () => {
    const { data: session, status } = useSession()

    if (status === 'loading') {
        return <Loader />
    }

    if (status === 'unauthenticated') {
        redirect('/')
    }

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
                    <button
                        onClick={() =>
                            signIn('github', { callbackUrl: '/dashboard' })
                        }
                    >
                        Sign In with Github
                    </button>
                </>
            )}
        </>
    )
}

export default Dashboard
