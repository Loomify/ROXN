import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import '@/css/index.css';
import { SiDiscord } from '@icons-pack/react-simple-icons';
import { Box, Search, Users } from 'react-feather';
export default function Home() {
  return (
    <>
      <Navbar />
      <div className='front_hero'>
        <div className='font_hero_content'>
          <h1 className='font_hero_slogan'><span>Leading change</span> in programming and research</h1>
          <p className='font_hero_text'>One step at a time.</p>
        </div>
      </div>
      <div className='explore'>
        <h2 className='explore_title'><Search /> Our Wings</h2>
        <div className='explore_content'>
          {/* Card */}
          <div className='explore_card'>
            <div className='card_header'>
              <h2 className='header_top'>Loom.</h2>
              <h4 className='header_btm'>RESEARCH</h4>
            </div>
            <div className='card_body'>
              <p>The research wing is dedicated to being able to develop and allow for individuals to be able to explore the frontiers within research.</p>
            </div>
          </div>
          <div className='explore_card'>
            <div className='card_header'>
              <h2 className='header_top'>Loom.</h2>
              <h4 className='header_btm'>APPLICATIONS</h4>
            </div>
            <div className='card_body'>
              <p>The applications wing is dedicated to be able to develop applications that allow for necessary functions of Loom to applications that improve research and beyond.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='services'>
        <h2><Users /> Community</h2>
        <p>Join our Discord server so that you can get the latest updates on applications and research being made and be able to be able to participate in a wing.</p>
        <a href='/socials/discord'><SiDiscord /> Join our Discord</a>
      </div>
      <Footer />
    </>
  );
}
