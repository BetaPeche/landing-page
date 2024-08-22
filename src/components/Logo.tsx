import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
    return (
        <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-extrabold text-text-primary"
        >
            <Image
                src="/images/Horizon UI Avatar.png"
                alt="Logo Horizon UI"
                width={34}
                height={34}
                priority={true}
                quality={100}
            />
            HorizonUI
        </Link>
    )
}

export default Logo
