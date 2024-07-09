import './Footer.css';

import Link from 'next/link'
import { SiDiscord, SiX } from '@icons-pack/react-simple-icons';

export function Footer() {
    return (
        <footer className='footer_page'>
            <div className='footer_brand'>
                <Link className='logo_font' href='/'>Loom.</Link>
                <ul className='footer_socials_link'>
                    <li><Link className='footer_socials_discord' href='/socials/discord'><SiDiscord /></Link></li>
                </ul>
            </div>
            <div className='footer_links'>
                <h3>Site</h3>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                </ul>
            </div>
        </footer>
    )
}