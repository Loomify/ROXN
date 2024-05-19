import '@/css/components/goto.css'
import { MdArrowForwardIos } from "react-icons/md";

export function GoTo(params: any) {
    let href = params.href
    let className = params.className
    if (href === undefined) {
        href = '#'
    }
    if (className === undefined) {
        className = ''
    }
    return (
        <>
            {/* @ts-ignore */}
            <a className={`goto ${className}`} href={`${href}`}>Go To <span className='arrow'><MdArrowForwardIos /></span></a>
        </>
    )
}