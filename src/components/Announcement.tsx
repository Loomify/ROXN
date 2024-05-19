'use client';
import '@/css/components/announcement.css'
import { useEffect, useState } from 'react';

export function Announcement() {
    let [loading, setLoading] = useState(true)
    let [announcement, setAnnouncement] = useState({head: '', description: '', category: ''} as {head: string, description: string, category: string})
    let VISIBLE = 'none'
    
    useEffect(() => {
        fetch('/api/announcement').then(res => {
            res.json().then(data => {
                setLoading(false)
                setAnnouncement(data)
            })
        })
    },[])

    if (announcement.category === 'important') {
        VISIBLE = 'block'
    }

    return (
        <>
            {loading ? <></> : <>
                <div className='announcement' style={{display: VISIBLE}}>
                    <div className='announcement-head'>
                        <h1>{announcement.head}</h1>
                    </div>
                    <div className='announcement-description'>
                        <p>{announcement.description}</p>
                    </div>
                </div>
            </>}
        </>
    )
}