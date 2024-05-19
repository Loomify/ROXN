import '@/css/components/footer.css'
import { BsDiscord, BsLinkedin } from 'react-icons/bs'
export function Footer() {
    return (
        <>
            <footer className='footer'>
                {/* <div className="links">
                    <div className='col'>
                        <h3> Research</h3>
                        <a href="#">Past Research</a>
                        
                    </div>
                    <div className='col'>
                        <h3>Community</h3>
                        <a href="#">Privacy Policy</a>
                        
                    </div>

                </div> */}
                <div className="social">
                    <a href='/social/discord'><BsDiscord /></a>
                </div>
                <div className='container'>
                    <p>©{new Date().getFullYear()} Loom. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}