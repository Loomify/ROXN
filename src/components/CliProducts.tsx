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
            {products.length === 0 ? (
                <div className="product">
                    <p> </p>
                </div>
            ) : (
                products.map((product, index) => (
                    <div className="product" key={index}>
                        {/* @ts-ignore */}
                        <h2>{product.name}</h2>
                        {/* @ts-ignore */}
                        <p>{product.description}</p>
                    </div>
                ))
            )}
        </>
    )
}