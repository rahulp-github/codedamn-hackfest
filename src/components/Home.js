import React from 'react'
import DocCards from './DocCards'
import Mic from './Mic'

export default function Home() {
    return (
        <div>
            <div className='doc-card-container'>
                <div className="container">
                    <div className="row">
                        <DocCards />
                        <DocCards />
                        <DocCards />
                        <DocCards />
                        <DocCards />
                        <DocCards />
                        <DocCards />
                    </div>
                </div>
            </div>
            <Mic />
        </div>
    )
}
