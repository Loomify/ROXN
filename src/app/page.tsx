import Image from "next/image";
import "@/css/index.css";
import {Navbar} from '@/components/Navbar';
import { Support } from "@/components/Support";
import { FaPlus } from "react-icons/fa";
import { Service } from "@/components/Services";

export default function Home() {
  return (
    <>
      <div className="landing">
        <video autoPlay loop muted src="https://www.w3schools.com/html/mov_bbb.mp4" />
        <div className="ft">
          <p>Creating a better world through software</p>
          <h1>Welcome to avnce.</h1>
        </div>
      </div>
      <div className="trust">
        <br />
        <h2>Trusted by nonprofits and companies alike</h2>
        <div className="trust-logos">
          <a href="https://tleem.org/" className="tleem-logo">TLEEM</a>
          {/* <a className="create-contact"><span><FaPlus /></span></a> */}
        </div>
      </div>
      <Service />
   </>
  );
}
