'use client'
import '@/css/components/Navbar.css'

export function Navbar() {
    return (
        <nav className='navbar'>
            <a className='logo_font' href='/'>Loom.</a>
            <ul className='nav_links'>
                <li><a className='link' href='/'>Link A</a></li>
            </ul>
        </nav>
    )
}