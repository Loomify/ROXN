import '@/css/calm.css'
import { GoTo } from './GoTo'

export function Calm() {
    return (
        <div className='final'>
            {/* <div className='v-group'>  
                <div className='calm'>
                    <h1>Research</h1>
                    <GoTo href="https://avnce.org" className="ss"  />
                </div>
                <div className='calm'>
                    <h1>Intercept</h1>
                    <GoTo />
                </div>
            </div> */}
            <div className='r-group'>
                <div className='calm'>
                    <h1>Join the Loom Project</h1>
                    <GoTo href="/social/discord" />
                </div>
                {/* <div className='calm'>
                    <h1>Applicationmaking and proceedures</h1>
                    <GoTo />
                </div> */}

            </div>
        </div>
    )
}