import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function Document() {
    const [paragraphCount, setParagraphCount] = useState(1);
    const [documentText, setDocumentText] = useState({title: ""});
    const commands = [
        {
          command: 'Alexa change title *',
          callback: (speech) => {
            console.log(speech)
            setDocumentText({...documentText, title: speech})
          }
        },
        {
          command: 'Alexa new paragraph *',
          callback: (speech) => {
            console.log(speech)
            setDocumentText({...documentText, paragraph: speech})
            console.log(documentText)
            setParagraphCount(paragraphCount + 1)
          }
        }
      ]
    
      const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition({commands});
    
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
    return (
        <div>
            <div className='document-container'>
                <div className='wrapper'>
                    <div className='top-buttons'>
                        <div className='back-button'>
                            <Link to="/" ><i className="icon fa-solid fa-arrow-left fa-2x"></i></Link>
                        </div>
                        <div className='save-button'>
                            <i className="icon fa-solid fa-floppy-disk fa-2x"></i>
                        </div>
                        <div className='download-button'>
                            <i className="icon fa-solid fa-download fa-2x"></i>
                        </div>
                        <div className='share-button'>
                            <i className="icon fa-solid fa-share-nodes fa-2x"></i>
                        </div>
                    </div>
                    <div className='document-area'>
                        <div className='document-title'>
                            <h1>{documentText.title!="" ? documentText.title : "Title not confirmed!"}</h1>
                        </div>
                        <div className='document-body'>
                            <p>{documentText.paragraph!="" ? documentText.paragraph : "paragraph not confirmed!"}</p>
                            {transcript}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mic-transcript-container">
                <div className="wrap-mic-transcript">
                    <div className="transcript-area"> {listening}
                    </div>
                    <div className='mic-area'>
                        <span className='mic'>
                            <i className="mic-icon fa-solid fa-microphone fa-2x" onClick={()=>SpeechRecognition.startListening({
                                continuous: true,
                                language: 'en-US'
                            })}></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
