'use client'
import Header from '@/components/Header'
import Loader from '@/components/Loader'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {
    const { status } = useSession()

    if (status === 'loading') {
        return <Loader />
    }
    return (
        <>
            <Header />
            <div className="grid w-full max-w-[1140px] grid-cols-2 justify-items-stretch max-md:grid-cols-1">
                <div className="flex flex-col justify-center gap-6">
                    <h1 className="text-6xl font-extrabold leading-[72px] text-text-primary">
                        Take your website to the next level with Horizon UI
                    </h1>
                    <p className="max-w-[440px] pr-5 font-medium leading-8 text-text-secondary">
                        Save hundreds of hours trying to create and develop a
                        dashboard from scratch. The fastest, most responsive &
                        trendiest dashboard is here. Seriously.
                    </p>
                    <button className="max-w-fit rounded-[10px] bg-primary px-7 py-4 text-sm font-bold text-slate-50 hover:bg-indigo-600">
                        Get started now
                    </button>
                </div>
                <Image
                    className="justify-self-end"
                    src="/images/Rectangle 842.png"
                    alt="Rectangle 842"
                    width={456}
                    height={640}
                    priority={true}
                />
            </div>
            <div className="flex w-full max-w-[1140px] flex-col items-center gap-3 py-[120px]">
                <h2 className="leadin-[44px] text-3xl font-extrabold text-text-primary">
                    How Horizon works?
                </h2>
                <p className="font-medium text-text-secondary">
                    Tellus rutrum tellus pellentesque eu tincidunt tortor
                    condimentum.
                </p>
            </div>
        </>
    )
}
