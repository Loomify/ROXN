'use client'
import '@/css/components/Navbar.css'
import Link from 'next/link'

export function Navbar() {
    return (
        <nav className='navbar'>
            <Link className='logo_font' href='/'>Loom.</Link>
            <ul className='nav_links'>
                <li><Link className='link' href='/wings'>Wings</Link></li>
                <li><Link className='link' href='/about'>About</Link></li>
                <li><Link className='link' href='/Project_Policies.pdf'>Project Policy</Link></li>
            </ul>
        </nav>
    )
}