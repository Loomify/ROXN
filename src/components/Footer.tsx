import './Footer.css';

import Link from 'next/link'
import { SiDiscord, SiGithub } from '@icons-pack/react-simple-icons';

export function Footer() {
    return (
        <footer className='footer_page'>
            <div className='footer_brand'>
                <Link className='logo_font' href='/'>Loom.</Link>
                <ul className='footer_socials_link'>
                    <li><Link className='footer_socials_discord' href='/socials/discord'><SiDiscord /></Link></li>
                    <li><Link className='' href='/socials/github'><SiGithub /></Link></li>
                </ul>
            </div>
        </footer>
    )
}