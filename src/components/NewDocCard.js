import React from 'react'
import { Link } from 'react-router-dom'
import sedan from '../images/icon-sedans.svg'


export default function NewDocCard() {
    
    return (
        <main>
      <section className="container">
        <section className="card__container card__orange">
          <div className="content__img">
            <img src={sedan} className="img__card" loading="lazy" alt="eljimmyramz Jaime Ramirez" title="eljimmyramz Jaime Ramirez"  />
          </div>
          <h2 className="card__name">Title</h2>
          <div className="card__parr">
            <p>
              DOC CONTENT
            </p>
          </div>
          <div className="card__linkcont">
          <Link to="/codedamn-hackfest/document/dummy" className="link__card color__link__dark">Create document</Link>
          </div>
        </section>
      </section>
    </main>
    )
}
// <Link to="/document/1" className="btn btn-primary">Open document</Link>