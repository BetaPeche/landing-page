'use client'
import ButtonPrimary from '@/components/ButtonPrimary'
import ChevronRight from '@/components/ChevronRight'
import ExplainCard from '@/components/ExplainCard'
import FeatureCard from '@/components/FeatureCard'
import Footer from '@/components/Footer'
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
            <main>
                <section className="grid w-full max-w-[1140px] grid-cols-2 justify-items-stretch pb-20 max-md:grid-cols-1">
                    <div className="flex flex-col justify-center gap-6">
                        <h1 className="text-6xl font-extrabold leading-[72px] text-text-primary">
                            Take your website to the next level with Horizon UI
                        </h1>
                        <p className="max-w-[440px] pr-5 font-medium leading-8 text-text-secondary">
                            Save hundreds of hours trying to create and develop
                            a dashboard from scratch. The fastest, most
                            responsive & trendiest dashboard is here. Seriously.
                        </p>
                        <div className="flex items-center">
                            <ButtonPrimary />
                            <button className="flex gap-[6px] px-4 text-text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <g clipPath="url(#clip0_4684_57)">
                                        <path
                                            d="M19.23 15.26L16.69 14.97C16.08 14.9 15.48 15.11 15.05 15.54L13.21 17.38C10.38 15.94 8.05998 13.63 6.61998 10.79L8.46998 8.93999C8.89998 8.50999 9.10998 7.90999 9.03998 7.29999L8.74998 4.77999C8.62998 3.76999 7.77998 3.00999 6.75998 3.00999H5.02998C3.89998 3.00999 2.95998 3.94999 3.02998 5.07999C3.55998 13.62 10.39 20.44 18.92 20.97C20.05 21.04 20.99 20.1 20.99 18.97V17.24C21 16.23 20.24 15.38 19.23 15.26Z"
                                            fill="#1B2559"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4684_57">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="text-sm font-medium">
                                    Book a free call
                                </p>
                            </button>
                        </div>
                    </div>
                    <Image
                        className="justify-self-end"
                        src="/images/Rectangle 842.png"
                        alt="Rectangle 842"
                        width={456}
                        height={640}
                        priority={true}
                    />
                </section>
                <section className="flex w-full max-w-[1140px] flex-col gap-[60px] py-[120px]">
                    <div className="flex w-full flex-col items-center gap-3">
                        <h2 className="leadin-[44px] text-4xl font-extrabold text-text-primary">
                            How Horizon works?
                        </h2>
                        <p className="font-medium text-text-secondary">
                            Tellus rutrum tellus pellentesque eu tincidunt
                            tortor condimentum.
                        </p>
                    </div>
                    <div className="flex w-full items-center justify-evenly gap-10">
                        <ExplainCard
                            number={1}
                            active={true}
                            title="Create your Account"
                        />
                        <ChevronRight />
                        <ExplainCard
                            number={2}
                            active={false}
                            title="Setup your Account"
                        />
                        <ChevronRight />
                        <ExplainCard
                            number={3}
                            active={false}
                            title="Start creating with Horizon"
                        />
                    </div>
                </section>
                <section className="flex w-full max-w-[1140px] gap-2 py-[120px]">
                    <FeatureCard
                        icon="mail"
                        title="Share team inboxes"
                        shadow={false}
                    />
                    <FeatureCard
                        icon="chart"
                        title="Analytics dashboard"
                        shadow={true}
                    />
                    <FeatureCard
                        icon="user"
                        title="Deliver instant answer"
                        shadow={false}
                    />
                </section>
                <section className="flex w-full max-w-[1140px] justify-between gap-[110px] py-[120px]">
                    <div className="flex flex-col justify-between gap-[60px]">
                        <div className="flex flex-col gap-[10px]">
                            <h2 className="text-3xl font-extrabold text-text-primary">
                                Boost your workflow with Horizon
                            </h2>
                            <p className="text-base font-medium leading-[30px] text-text-secondary">
                                Urna duis convallis convallis tellus interdum
                                velit laoreet pentesque aliquam tortor consequat
                                porta.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-x-10 gap-y-[60px]">
                            <div className="flex flex-col gap-[2px]">
                                <h3 className="leadin-[44px] text-4xl font-extrabold text-text-primary">
                                    340+
                                </h3>
                                <h4 className="text-base font-bold leading-[30px] text-text-primary">
                                    Successful Projects
                                </h4>
                                <p className="text-base font-medium leading-[30px] text-text-secondary">
                                    Urna duis convallis convallis tellus
                                    interdum velit laoreet.
                                </p>
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <h3 className="leadin-[44px] text-4xl font-extrabold text-text-primary">
                                    $10m
                                </h3>
                                <h4 className="text-base font-bold leading-[30px] text-text-primary">
                                    Annual Percentage Rate
                                </h4>
                                <p className="text-base font-medium leading-[30px] text-text-secondary">
                                    Urna duis convallis convallis tellus
                                    interdum velit laoreet.
                                </p>
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <h3 className="leadin-[44px] text-4xl font-extrabold text-text-primary">
                                    2.8k+
                                </h3>
                                <h4 className="text-base font-bold leading-[30px] text-text-primary">
                                    Clients Worldwide
                                </h4>
                                <p className="text-base font-medium leading-[30px] text-text-secondary">
                                    Urna duis convallis convallis tellus
                                    interdum velit laoreet.
                                </p>
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <h3 className="leadin-[44px] text-4xl font-extrabold text-text-primary">
                                    7000+
                                </h3>
                                <h4 className="text-base font-bold leading-[30px] text-text-primary">
                                    Daily Visits
                                </h4>
                                <p className="text-base font-medium leading-[30px] text-text-secondary">
                                    Urna duis convallis convallis tellus
                                    interdum velit laoreet.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image
                        className="justify-self-end rounded-2xl"
                        src="/images/eclair.png"
                        alt="eclair"
                        width={515}
                        height={504}
                        priority={true}
                        quality={100}
                    />
                </section>
                <section className="flex w-full max-w-[1140px] flex-col items-center gap-[74px] py-[120px]">
                    <div className="flex flex-col items-center gap-4">
                        <h2 className="text-4xl font-extrabold leading-[44px] text-text-primary">
                            Customer Testimonials
                        </h2>
                        <p className="w-[686px] text-center text-base font-medium leading-[30px] text-text-secondary">
                            Anim aute id magna aliqua ad ad non deserunt sunt.
                            Qui irure qui lorem cupidatat commodo. Elit sunt
                            amet fugiat veniam occaecat fugiat aliqua.
                        </p>
                    </div>
                    <div className="flex w-full gap-[18px]">
                        <div className="flex w-full flex-col items-center gap-[37px] rounded-2xl bg-[#F6F8FD] p-8">
                            <h3 className="text-center text-xl font-bold leading-[30px] text-text-primary">
                                “A must needed kit for every single software
                                arhitect. It makes your coding life easier and
                                your final product will be blooming.”
                            </h3>
                            <div className="flex flex-col items-center gap-4">
                                <Image
                                    className="h-auto w-auto"
                                    src="/images/Avatar.png"
                                    alt="eclair"
                                    width={40}
                                    height={0}
                                    priority={true}
                                    quality={100}
                                />
                                <div className="flex flex-col items-center">
                                    <h4 className="text-lg font-extrabold text-text-primary">
                                        Tiana Schleifer
                                    </h4>
                                    <p className="text-xs font-semibold leading-[18px] text-text-secondary">
                                        CEO & Founder
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-center gap-[37px] rounded-2xl bg-[#F6F8FD] p-8">
                            <h3 className="text-center text-xl font-bold leading-[30px] text-text-primary">
                                “A must needed kit for every single software
                                arhitect. It makes your coding life easier and
                                your final product will be blooming.”
                            </h3>
                            <div className="flex flex-col items-center gap-4">
                                <Image
                                    className="h-auto w-auto"
                                    src="/images/Avatar.png"
                                    alt="eclair"
                                    width={40}
                                    height={0}
                                    priority={true}
                                    quality={100}
                                />
                                <div className="flex flex-col items-center">
                                    <h4 className="text-lg font-extrabold text-text-primary">
                                        Tiana Schleifer
                                    </h4>
                                    <p className="text-xs font-semibold leading-[18px] text-text-secondary">
                                        CEO & Founder
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex w-full max-w-[1140px] items-center justify-between py-[120px]">
                    <div>
                        <h2 className="text-4xl font-extrabold leading-[44px] text-text-primary">
                            Save time with Horizon.
                        </h2>
                        <h3 className="text-4xl font-semibold leading-[44px] text-text-primary">
                            Turn your visitors info clients.
                        </h3>
                    </div>
                    <div className="flex gap-4">
                        <button className="max-w-fit rounded-[10px] border border-solid border-primary px-7 py-4 text-sm font-bold text-primary hover:bg-violet-50">
                            Try Demo
                        </button>
                        <ButtonPrimary />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
