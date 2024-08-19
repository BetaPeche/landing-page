'use client'
import ChevronRight from '@/components/ChevronRight'
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
            <div className="grid w-full max-w-[1140px] grid-cols-2 justify-items-stretch pb-20 max-md:grid-cols-1">
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
            <div className="flex w-full max-w-[1140px] flex-col gap-[60px] py-[120px]">
                <div className="flex w-full flex-col items-center gap-3">
                    <h2 className="leadin-[44px] text-3xl font-extrabold text-text-primary">
                        How Horizon works?
                    </h2>
                    <p className="font-medium text-text-secondary">
                        Tellus rutrum tellus pellentesque eu tincidunt tortor
                        condimentum.
                    </p>
                </div>
                <div className="flex w-full items-center justify-evenly gap-10">
                    <div className="flex gap-[18px]">
                        <div className="h-12 w-12 rounded-full bg-primary text-center text-base font-bold leading-[48px] text-white">
                            1
                        </div>
                        <div className="flex flex-1 flex-col">
                            <p className="text-base font-bold leading-[30px] text-text-primary">
                                Create your Account
                            </p>
                            <p className="text-base font-medium leading-[30px] text-text-secondary">
                                Condimentum vit pellemsque habitant morbi at
                                molestie
                            </p>
                        </div>
                    </div>
                    <ChevronRight />
                    <div className="flex gap-[18px]">
                        <div className="h-12 w-12 rounded-full border-2 border-primary text-center text-base font-bold leading-[44px] text-primary">
                            2
                        </div>
                        <div className="flex flex-1 flex-col">
                            <p className="text-base font-bold leading-[30px] text-text-primary">
                                Setup your Account
                            </p>
                            <p className="text-base font-medium leading-[30px] text-text-secondary">
                                Condimentum vit pellemsque habitant morbi at
                                molestie
                            </p>
                        </div>
                    </div>
                    <ChevronRight />
                    <div className="flex gap-[18px]">
                        <div className="h-12 w-12 rounded-full border-2 border-primary text-center text-base font-bold leading-[44px] text-primary">
                            3
                        </div>
                        <div className="flex flex-1 flex-col">
                            <p className="text-base font-bold leading-[30px] text-text-primary">
                                Start creating with Horizon
                            </p>
                            <p className="text-base font-medium leading-[30px] text-text-secondary">
                                Condimentum vit pellemsque habitant morbi at
                                molestie
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
