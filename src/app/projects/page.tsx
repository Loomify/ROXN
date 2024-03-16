import CliProducts from "@/components/CliProducts"
import Footer from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import '@/css/innative.css'

export default function e() {
    return (
        <>
            <div className="products-ir">
                <h1>Our Projects and Products</h1>
                <div className="products">
                    <CliProducts />
                </div>
            </div>            
        </>
    )
}