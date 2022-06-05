import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function Mic() {

  const commands = [
    {
      command: 'open *',
      callback: (docid) => {
        window.open('http://localhost:3000/document/' + docid)
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
    <div className="mic-transcript-container">
        <div className="wrap-mic-transcript">
            <div className="transcript-area"> {transcript}
            </div>
            <div className='mic-area'>
                <span className='mic'>
                    <i className="mic-icon fa-solid fa-microphone fa-2x" onClick={SpeechRecognition.startListening({continuous: true,
                    language: 'en-US'})}></i>
                </span>
            </div>
        </div>
    </div>
  )
}
