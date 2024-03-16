import CliProducts from "@/components/CliProducts"
import Footer from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import '@/css/innative.css'

export default function e() {
    return (
        <>
            <Navbar />
            <div className="products-ir">
                <h1>Our Products</h1>
                <div className="products">
                    <CliProducts />
                    <div className="product">
                        <h2>Product 1</h2>
                        <p>Product 1 description</p>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}