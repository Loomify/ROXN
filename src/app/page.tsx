import '@/css/index.css';
import { Search } from 'react-feather';
export default function Home() {
  return (
    <>
      <div className='front_hero'>
        <div className='font_hero_content'>
          <h1 className='font_hero_slogan'><span>Programs that make students</span> be able to grow and succeed.</h1>
          <p className='font_hero_text'>Introducing Loom programs.</p>
        </div>
      </div>
      <div className='explore'>
        <Search />
      </div>
    </>
  );
}
