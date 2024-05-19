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
        <div className='navbar' id='nav'>
            <h1>Loom.</h1>
        </div>
    )
}