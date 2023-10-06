import { footerLinks } from "@/constants"
import Image from "next/image"
import Link from 'next/link'

type ColumnProps = {
    title: string,
    links: Array<string>
}

const FooterColumn = ({ title, links }: ColumnProps) => (
    <div className="flex flex-1 flex-col gap-3 text-sm min-w-max">
        <h4 className="font-semibold">{title} </h4>
        <ul className="flex flex-col gap-2 font-normal">
            {links.map(link => (
                <li key={link}>
                    <Link href='/'> {link}</Link>
                </li>
            ))}
        </ul>
    </div>
)

const Footer = () => {
    return (
        <footer className='flexStart flex-col w-full gap-20 bg-light-white lg:px-20 py-6 px-5'>
            <div className='flex flex-col gap-12 w-full'>
                <div className='flex flex-col items-start'>
                    <Image
                        src={'/logo-purple.svg'}
                        width={111}
                        height={60}
                        alt="footer logo"
                    />
                    <p className="text-sm font-normal mt-5 max-w-xs text-start">
                        Flexibble is the world's largest community for creatives to share, grow and get hired.
                    </p>
                </div>

                <div className="flex flex-wrap gap-12">
                    <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />

                    <div className="flex flex-col gap-4 flex-1">
                        <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
                        <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
                    </div>

                    <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />

                    <div className="flex flex-col gap-4 flex-1">
                        <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links} />
                        <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links} />
                    </div>

                    <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links} />
                </div>
            </div>


            <div className="flexBetween max-sm:flex-col w-full text-sm font-normar">
                <p>&copy; Flexibble. All rights reserved</p>
                <p className="text-gray">
                    <span className="text-black">10,121</span> projects submitted.
                </p>
            </div>
        </footer>
    )
}

export default Footer