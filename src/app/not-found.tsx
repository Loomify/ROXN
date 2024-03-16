import '@/css/404.css'

export default function NotFound() {
    return (
        <>
            <div className='not-found'>
                <div className='not-found-content'>
                    <h1>404</h1>
                    <p>This is awkward. The page that you are trying to find could not be found.</p>
                    <p>Fear not, we are here to take you back to safety!</p>
                </div>
                <div>
                    <a href='/' className='f-safe'>Go back to safety</a>
                </div>
            </div>
        </>
    )
}