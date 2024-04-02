import { Navbar } from "@/components/Navbar";
import '@/css/about.css'

export default function About() {
    return (
        <>
            <div className="about">
                <h1>about avnce</h1>
            </div>
            <div className="lead">
                <div className="mission">
                    <h2>Our Mission</h2>       
                    <p>Our mission is to be able to provide the software necessary to change the world for the better.</p>
                </div>                
            </div>
            <div className="history">
                <div>
                    <h2>Our History</h2>
                    <p>avnce was founded in July of 2022 (unoficially) by 2 friends as aviance who wanted to build software that would change the world. When one of the friends left, aviance rebranded to avnce and has been working on projects ever since.</p>
                </div>
            </div>
        </>
    )
}