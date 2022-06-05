import React from 'react'
import { Link } from 'react-router-dom'

export default function DocCards() {
    return (
        <div className='col-4'>
            <div className="card">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/document/1" className="btn btn-primary">Open document</Link>
                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
            </div>
        </div>
    )
}
