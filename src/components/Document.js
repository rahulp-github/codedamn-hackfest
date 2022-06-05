import React from 'react'
import { Link } from 'react-router-dom'

export default function Document() {
    return (
        <div className='document-container'>
            <div className='wrapper'>
                <div className='top-buttons'>
                    <div className='back-button'>
                        <Link to="/" ><i class="icon fa-solid fa-arrow-left fa-2x"></i></Link>  
                    </div>
                    <div className='save-button'>
                        <i class="icon fa-solid fa-floppy-disk fa-2x"></i>
                    </div>
                    <div className='download-button'>
                        <i class="icon fa-solid fa-download fa-2x"></i>
                    </div>
                    <div className='share-button'>
                        <i class="icon fa-solid fa-share-nodes fa-2x"></i>
                    </div>
                </div>
                <div className='document-area'>
                    <div className='document-title'>
                        <h1>Document Title</h1>
                    </div>
                    <div className='document-body'>
                        lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap int
                        o electronic typesetting, remaining essentially unchanged. It was popularised
                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Why do we use it?
                        It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum
                        is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                        content here', making it look like readable English. Many desktop publishing packages and web page
                        editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
                        many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                        accident, sometimes on purpose (injected humour and the like).
                        Where does it come from?
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
                        obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word
                        in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32
                    </div>
                </div>
            </div>
        </div>
    )
}
