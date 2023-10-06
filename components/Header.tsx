import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constants'
import AuthProvider from './AuthProvider'


const Header = () => {
    const session = {}

    return (
        <nav className='flexBetween py-5 px-8  border-b border-nav-border gap-4'>
            <div className='flex-1 flexStart gap-10'>
                <Link href="/">
                    <Image
                        src={'/logo.svg'}
                        width={113}
                        height={43}
                        alt='logo'
                    />
                </Link>

                <ul className='xl:flex hidden text-sm gap-7'>
                    {NavLinks.map(link => (
                        <Link href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
            </div>

            <div className='flexCenter gap-4'>
                {session ? (
                    <>
                        UserPhoto

                        <Link href={'/create-project'}>
                            Share Work
                        </Link>
                    </>
                ) : (
                    <AuthProvider />
                )
                }
            </div>
        </nav>
    )
}

export default Header