'use client'
import ButtonPrimary from '@/components/ButtonPrimary'
import ChevronRight from '@/components/ChevronRight'
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
                        <h2 className="leadin-[44px] text-3xl font-extrabold text-text-primary">
                            How Horizon works?
                        </h2>
                        <p className="font-medium text-text-secondary">
                            Tellus rutrum tellus pellentesque eu tincidunt
                            tortor condimentum.
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
                </section>
                <section className="flex w-full max-w-[1140px] gap-2 py-[120px]">
                    <div className="flex w-full flex-col items-center gap-6 py-[22px]">
                        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                            >
                                <path
                                    d="M22.3233 8C22.3233 7.28 21.9533 6.65 21.3833 6.3L12.3333 1L3.28331 6.3C2.71331 6.65 2.33331 7.28 2.33331 8V18C2.33331 19.1 3.23331 20 4.33331 20H20.3333C21.4333 20 22.3333 19.1 22.3333 18L22.3233 8ZM20.3233 8V8.01L12.3333 13L4.33331 8L12.3333 3.32L20.3233 8ZM4.33331 18V10.34L12.3333 15.36L20.3233 10.37L20.3333 18H4.33331Z"
                                    fill="white"
                                />
                            </svg>
                        </span>
                        <h3 className="pb-2 text-2xl font-extrabold text-text-primary">
                            Share team inboxes
                        </h3>
                        <p className="w-[295px] text-center text-text-secondary">
                            Wheter you have a team of 2 or 200, our shared team
                            inboxes keep everyone
                        </p>
                    </div>
                    <div className="flex w-full flex-col items-center gap-6 rounded-2xl bg-white py-[22px] shadow-[0_32px_64px_-12px_rgba(85,105,135,0.13)]">
                        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M2.78997 14.78L2.69997 14.69C2.30997 14.3 2.30997 13.67 2.69997 13.28L8.78997 7.18003C9.17997 6.79003 9.80997 6.79003 10.2 7.18003L13.49 10.47L19.88 3.29003C20.26 2.86003 20.93 2.85003 21.33 3.25003C21.7 3.63003 21.72 4.23003 21.37 4.62003L14.2 12.69C13.82 13.12 13.16 13.14 12.75 12.73L9.49997 9.48003L4.19997 14.78C3.81997 15.17 3.17997 15.17 2.78997 14.78ZM4.19997 20.78L9.49997 15.48L12.75 18.73C13.16 19.14 13.82 19.12 14.2 18.69L21.37 10.62C21.72 10.23 21.7 9.63003 21.33 9.25003C20.93 8.85003 20.26 8.86003 19.88 9.29003L13.49 16.47L10.2 13.18C9.80997 12.79 9.17997 12.79 8.78997 13.18L2.69997 19.28C2.30997 19.67 2.30997 20.3 2.69997 20.69L2.78997 20.78C3.17997 21.17 3.81997 21.17 4.19997 20.78Z"
                                    fill="white"
                                />
                            </svg>
                        </span>
                        <h3 className="pb-2 text-2xl font-extrabold text-text-primary">
                            Analytics dashboard
                        </h3>
                        <p className="w-[295px] text-center text-text-secondary">
                            Wheter you have a team of 2 or 200, our shared team
                            inboxes keep everyone
                        </p>
                    </div>
                    <div className="flex w-full flex-col items-center gap-6 py-[22px]">
                        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                            >
                                <path
                                    d="M16.3766 12.71C17.357 11.9387 18.0726 10.8809 18.4239 9.68394C18.7751 8.48697 18.7446 7.21027 18.3364 6.03147C17.9283 4.85267 17.1629 3.83039 16.1467 3.10686C15.1305 2.38332 13.9141 1.99451 12.6666 1.99451C11.4192 1.99451 10.2028 2.38332 9.18657 3.10686C8.17038 3.83039 7.40498 4.85267 6.99685 6.03147C6.58872 7.21027 6.55815 8.48697 6.9094 9.68394C7.26065 10.8809 7.97625 11.9387 8.95664 12.71C7.27672 13.383 5.81093 14.4994 4.71553 15.9399C3.62014 17.3805 2.9362 19.0913 2.73664 20.89C2.72219 21.0213 2.73375 21.1542 2.77066 21.2811C2.80757 21.4079 2.86911 21.5263 2.95175 21.6293C3.11866 21.8375 3.36142 21.9708 3.62664 22C3.89185 22.0292 4.1578 21.9518 4.36596 21.7849C4.57413 21.618 4.70746 21.3752 4.73664 21.11C4.95622 19.1552 5.88832 17.3498 7.35486 16.0388C8.82139 14.7278 10.7195 14.003 12.6866 14.003C14.6537 14.003 16.5519 14.7278 18.0184 16.0388C19.485 17.3498 20.4171 19.1552 20.6366 21.11C20.6638 21.3557 20.7811 21.5827 20.9657 21.747C21.1504 21.9114 21.3894 22.0015 21.6366 22H21.7466C22.0088 21.9698 22.2484 21.8373 22.4132 21.6313C22.578 21.4252 22.6548 21.1624 22.6266 20.9C22.4261 19.0962 21.7385 17.381 20.6375 15.9382C19.5365 14.4954 18.0636 13.3795 16.3766 12.71ZM12.6666 12C11.8755 12 11.1022 11.7654 10.4444 11.3259C9.78656 10.8864 9.27387 10.2616 8.97112 9.53074C8.66837 8.79983 8.58916 7.99557 8.7435 7.21964C8.89784 6.44372 9.2788 5.73099 9.83821 5.17158C10.3976 4.61217 11.1104 4.2312 11.8863 4.07686C12.6622 3.92252 13.4665 4.00173 14.1974 4.30448C14.9283 4.60724 15.553 5.11993 15.9925 5.77772C16.432 6.43552 16.6666 7.20888 16.6666 8C16.6666 9.06087 16.2452 10.0783 15.4951 10.8284C14.7449 11.5786 13.7275 12 12.6666 12Z"
                                    fill="white"
                                />
                            </svg>
                        </span>
                        <h3 className="pb-2 text-2xl font-extrabold text-text-primary">
                            Deliver instant answer
                        </h3>
                        <p className="w-[295px] text-center text-text-secondary">
                            Wheter you have a team of 2 or 200, our shared team
                            inboxes keep everyone
                        </p>
                    </div>
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
                            <div>
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
                            <div>
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
                            <div>
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
                            <div>
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
                    />
                </section>
            </main>
            <Footer />
        </>
    )
}
