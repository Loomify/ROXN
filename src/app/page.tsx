import Image from "next/image";
import "@/css/index.css";
import {Navbar} from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="landing">
        <div className="ft">
          <p>Creating a better world through software</p>
          <h1>Welcome to avnce.</h1>
        </div>
      </div>
    </>
  );
}
