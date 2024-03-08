import '@/css/components/footer.css';
import { VscGithubInverted } from "react-icons/vsc";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
    let c = new Date().getFullYear()
    return (
        <>
            <footer className='footer'>
                <div className="footer-content">
                    <div className='footer-content-left'>
                        <h2>avnce</h2>
                        <p>Creating a better world through software</p>
                        <div className='socials'>
                            <a href='https://github.com/avnce'><VscGithubInverted /></a>
                            <a href="https://discord.gg/xKVdGd4fH4"><FaDiscord /></a>
                        </div>
                    </div>
                    <div className='footer-content-right'>
                        <div className='s-grid'>
                            <div className='links'>
                                <h3>Mainsite</h3>
                                <br />
                                <a href='/'>Home</a>
                                <a href='/about'>About</a>
                                <a href='/contact'>Contact</a>
                            </div>
                            <div className='links'>
                                <h3>Developers</h3>
                                <br />
                                <a href='/'>Home</a>
                                <a href='/about'>About</a>
                                <a href='/contact'>Contact</a>
                            </div>
                            {/* <div className='links'>
                                <h3>Index</h3>
                                <br />
                                <a href='/'>Litmus</a>
                                <a href='/about'>About</a>
                                <a href='/contact'>Contact</a>
                            </div>
 */}
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <div className='div'>
                    <p>©{c} avnce</p>
                </div>
            </footer>
        </>
    )
}