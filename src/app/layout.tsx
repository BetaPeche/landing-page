import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import SessionWrapper from '@/components/SessionWrapper'

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'HomePage',
    description: 'NextJs and Tailwind project',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <SessionWrapper>
            <html lang="fr" className="">
                <body
                    className={`${plusJakarta.className} flex flex-col items-center bg-white p-5 dark:bg-slate-900`}
                >
                    {children}
                </body>
            </html>
        </SessionWrapper>
    )
}
