import { Navbar } from '@/components/Navbar'
import '@/css/new/index.css'
import { SiDiscord, SiGithub } from '@icons-pack/react-simple-icons'
import Link from 'next/link'
export default function Home() {
    return (
        <div>
            <Navbar />
            <div className='bg_img'>
            </div>
            <div className='home_content'>
                <div>
                    <h1>Introducing Loom.</h1>
                    <p>Leading change in programming and research, one step at a time</p>
                </div>
                <div className='links_social'>
                    <Link href={'/socials/discord'}><SiDiscord /></Link>
                    <Link href={'/socials/github'}><SiGithub /></Link>
                </div>
            </div>
        </div>
    )
}