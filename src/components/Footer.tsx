import Link from 'next/link'
import Logo from './Logo'
import {
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="flex flex-col items-center gap-8 py-20">
            <Logo />
            <div className="flex flex-col items-center gap-6">
                <div className="flex gap-12">
                    <Link
                        href="/"
                        className="text-sm font-medium leading-6 text-text-secondary"
                    >
                        About
                    </Link>
                    <Link
                        href="/"
                        className="text-sm font-medium leading-6 text-text-secondary"
                    >
                        Features
                    </Link>
                    <Link
                        href="/"
                        className="text-sm font-medium leading-6 text-text-secondary"
                    >
                        Blog
                    </Link>
                    <Link
                        href="/"
                        className="text-sm font-medium leading-6 text-text-secondary"
                    >
                        Ressources
                    </Link>
                    <Link
                        href="/"
                        className="text-sm font-medium leading-6 text-text-secondary"
                    >
                        Partners
                    </Link>
                    <Link
                        href="/"
                        className="text-sm font-medium leading-6 text-text-secondary"
                    >
                        Help
                    </Link>
                    <Link
                        href="/"
                        className="text-sm font-medium leading-6 text-text-secondary"
                    >
                        Terms
                    </Link>
                </div>
                <div className="flex gap-8">
                    <FaFacebookF className="text-xl text-text-secondary" />
                    <FaTwitter className="text-xl text-text-secondary" />
                    <FaGithub className="text-xl text-text-secondary" />
                    <FaLinkedin className="text-xl text-text-secondary" />
                    <FaInstagram className="text-xl text-text-secondary" />
                </div>
            </div>
            <p className="text-sm font-medium leading-6 text-text-secondary">
                © 2023, Horizon UI Library. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
