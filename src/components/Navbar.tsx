import '@/css/components/Navbar.css';
export function Navbar() {
    return (
        <>
            <div className='nav'>
                <h1>avnce</h1>
                <div className='nav-links'>
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    <a href='#'>Projects</a>
                </div>
            </div>
        </>
    )
}