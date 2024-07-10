import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import '@/css/about.css';
export default function Home() {
  return (
    <>
      <Navbar />
      <div className='philosophy_hero'>
        <h1>About Loom</h1>
        <p>Loom is a project that is dedicated to being able to develop and advance the frontiers of research and applications through open-source projects and research.</p>
      </div>
      <Footer />
    </>
  );
}
