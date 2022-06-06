import React from 'react'
import { Link } from 'react-router-dom'
import sedan from '../images/icon-sedans.svg'


export default function DocCards(props) {

   const colors = ["orange","green","dark"]
  
    return (
        <main>
      <section className="container">
        {props.docs.map((doc, index) => (
        <section key={index} className={`doc-card card__container card__${colors[index%3]}`}>
          <div className="content__img">
            <img src={sedan} className="img__card" loading="lazy" alt="eljimmyramz Jaime Ramirez" title="eljimmyramz Jaime Ramirez"  />
          </div>
          <h2 className="card__name"> {JSON.parse(doc).title}</h2>
          <div className="card__parr">
            <p>
              {(JSON.parse(doc).body).substring(0, 50)}
            </p>
          </div>
          <div className="card__linkcont">
          <Link to={`/document/${JSON.parse(doc).documentId}`} className="link__card color__link__dark">Open document {JSON.parse(doc).documentId}</Link>
          </div>
        </section>
        ))}

      </section>
    </main>
    )
}
// <Link to="/document/1" className="btn btn-primary">Open document</Link>