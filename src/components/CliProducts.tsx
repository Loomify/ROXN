'use client'

import { useEffect, useState } from "react"

export default function CliProducts() {
    let [products, setProducts] = useState([]);
    useEffect(() => {
        async function ci() {
            let cl = await fetch('/api/products');
            let res = await cl.json();
            let product = res.products;
            setProducts(product);
        }
        ci()
    }, [])
    return (
        <>
            {products.length == 0 ? (
                <div className="pr-loading product">
                    
                </div>
            ) : (
                products.map((product, index) => (
                    // @ts-ignore
                    <a key={index} className={`${product.style_class} product`} href={`${product.product_url}`}>
                        {/* @ts-ignore */}
                        {product.in_development ? (<><h3 className="indev">IN DEVELOPMENT</h3><br/><br/></>) : null}
                        {/* @ts-ignore */}
                        {product.planned ? (<h3 className="planned">PLANNED</h3>) : null}
                        {/* @ts-ignore */}
                        <h2>{product.name}</h2>
                        {/* @ts-ignore */}
                        <p>{product.description}</p>
                    </a>
                ))
            )}
        </>
    )
}