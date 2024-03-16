import '@/css/components/Services.css';
import Image from 'next/image';

export function Service() {
    return (
        <div className='suyu'>
            <h2>Our Projects</h2>
                <div className='suyu-grid'>
                    <a className='product pr-gh' href='https://github.com/avnce/zen'>
                        <h4 className='tag in-dev'>IN DEVELOPEMENT</h4>
                        <h3>Zen</h3>
                        <p>Zen is a hosting panel that is currently in developement and on hold.</p>
                    </a>
                    <a className='product'href='/projects'>
                        <h2>View more projects</h2>
                    </a>
            </div>
        </div>
    )
}