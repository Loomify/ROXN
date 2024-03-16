import '@/css/components/Navbar.css';
export function Navbar() {
    return (
        <>
            <div className='nav'>
                <a href='/'>avnce</a>
                <div className='nav-links'>
                    <a href='/about'>About</a>
                    <a href='/projects'>Projects</a>
                </div>
            </div>
        </>
    )
}