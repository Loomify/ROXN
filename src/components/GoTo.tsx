import '@/css/components/goto.css'
import { MdArrowForwardIos } from "react-icons/md";

export function GoTo(params: any) {
    return (
        <>
            <a className={`goto ${params.className}`} href={`${params.href}`}>Go To <span className='arrow'><MdArrowForwardIos /></span></a>
        </>
    )
}