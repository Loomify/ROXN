import '@/css/contact.css';

export default function Contact() {
    return (
        <>
            <div className='contact'>
                <h1>Contact</h1>
                <p>For any questions or inquiries, please contact the relevant email in the relevant card.</p>
            </div>  
            <br />
            <br />
            <div className='sirgrid'>
                <div className='grid'>
                    <div className='card'>
                        <h2>General Inquiries</h2>
                        <p> For general inquiries, please contact df at <a href='mailto:df@avnce.org'>df@avnce.org</a></p>
                    </div>
                    <div className='card'>
                        {/* <h2>Security Concerns</h2>
                        <p>For concerns regarding security of any of our products, please contact us at <a href='mailto:security@avnce.org'>security@avnce.org</a></p> */}
                        <h2>TBD</h2>
                        <p>This contact card is to be determined.</p>
                    </div>                            
                </div>
            </div>
            <br />
            <br />

        </>
    )
}