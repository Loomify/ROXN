'use client';

export function Navbar() {
    if (typeof window != 'undefined') {
        var prScpos = window.scrollY;
        window.onscroll = function() {
            var crScpos = window.scrollY
            let nav = document.getElementById('nav')
            if (prScpos > crScpos) {
                // @ts-ignore
                nav.style.transition = '0.5s'
                // @ts-ignore
                nav.style.top = '0'
            } else {
                // @ts-ignore
                nav.style.transition = '0.5s'
                // @ts-ignore
                nav.style.top = '-100px'
            }
            if (window.scrollY === 0) {
                // @ts-ignore
                nav.style.backgroundColor = 'transparent'
                // @ts-ignore
                nav.style.transition = '0.5s'
                // @ts-ignore
                nav.style.boxShadow = 'none'
            } else {
                // @ts-ignore
                nav.style.backgroundColor = '#1d1d1d'
                // @ts-ignore
                nav.style.boxShadow = '0 5px 4px rgba(0, 0, 0, 0.1)'
            }
            prScpos = crScpos
        }    
    }
    return (
        <>
            <style>
                {`
                            .navbar {
                                & {
                                    position: fixed;
                                    display: flex;
                                    top: 0;
                                    width: 100%;
                                    left: 0;
                                    height: 70px;
                                    margin: auto;
                                    z-index: 1000;
                                    align-items: center;
                                }
                                a {
                                    font-family: 'XB Niloofar';
                                    margin-left: 30px;
                                }
                            }
                `}
            </style>
            <div className='navbar' id='nav'>
                <a href="/">Loom.</a>
            </div>
        </>
    )
}