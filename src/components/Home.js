import React, { useEffect } from 'react'
import DocCards from './DocCards'
import NewDocCard from './NewDocCard'
import Mic from './Mic'
import SpeechRecognition,{useSpeechRecognition} from 'react-speech-recognition'

export default function Home(props) {

    const commands = [
        {
          command: 'Alexa open document *',
          callback: (docid) => {
            textToSpeech(`Opening Document ${docid}`);
            props.history.push('/document/' + docid)
          }
        },
        {
            command: 'Alexa create document *',
            callback: (docid) => {
              textToSpeech(`Creating new Document ${docid}`);
              props.history.push('/document/' + docid)
            }
        }
    ]

    // Utility function of textToSpeech
    function textToSpeech(text) {
        stopListening();
        let synth = speechSynthesis
        let utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
        setInterval(() => {
            if (!synth.speaking) {
                startListening();
            }
        }, 500);
    }
    
    const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
    } = useSpeechRecognition({commands});

    if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
    }
    
    
    const startListening = () => SpeechRecognition.startListening({ continuous: true });
    const stopListening = () => SpeechRecognition.stopListening();

    console.log(transcript)

    return (
        <div>
            <div className='doc-card-container'>
                <div className="container">
                    <div className="row">
                        <NewDocCard />
                        <DocCards />
                        <DocCards />
                        <DocCards />
                        <DocCards />
                    </div>
                </div>
            </div>
            <div className="mic-transcript-container">
                <div className="wrap-mic-transcript">
                    <div className="transcript-area"> {transcript}
                    </div>
                    <div className='mic-area'>
                        <span className='mic'>
                            <i className="mic-icon fa-solid fa-microphone fa-2x" onClick={startListening}></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
