import React, { useState, useEffect } from 'react'
import DocCards from './DocCards'
import NewDocCard from './NewDocCard'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'


export default function Home(props) { 
    const [docs, setDocs] = useState([]);
    const all_docs = [];
    useEffect(() => {
      //  startListening();
        for (var i = 0; i < localStorage.length; i++) {
            if(!isNaN(localStorage.key(i))){
                all_docs.push(localStorage.getItem(localStorage.key(i)));
            }
        }
        setDocs(all_docs);
    }, []);

    var numArr = ["zero", "one", "to", "three", "four", "five", "six", "seven", "eight", "nine","ten"];
    const commands = [
        {
            command:"Alexa show commands",
            callback:()=>{
                textToSpeech("Navigating to Commands Page");
                props.history.push('/commands');
            }
        },
        {
            command: 'Alexa open document *',
            callback: (docid) => {
                var document_id = docid;
                if(numArr.indexOf(docid) != -1){
                    document_id = numArr.indexOf(docid);
                }
                textToSpeech(`Opening Document ${document_id}`);
                props.history.push('/codedamn-hackfest/document/' + document_id)
            }
        },
        {
            command: 'Alexa create document',
            callback: () => {
                const all_keys = []
                for (var i = 0; i < localStorage.length; i++) {
                    if(!isNaN(localStorage.key(i))){
                        all_keys.push(parseInt(localStorage.key(i)));
                    }
                }
                all_keys.sort();
                var new_doc_id = 0;
                if(all_keys.length != 0)
                    new_doc_id = all_keys[all_keys.length - 1] + 1;
                textToSpeech(`Creating new Document with Id ${new_doc_id}`);
                props.history.push('/codedamn-hackfest/document/' + new_doc_id)
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
    } = useSpeechRecognition({ commands });

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
                        {docs && <DocCards docs={docs} />}
                    </div>
                </div>
            </div>
            <div className="mic-transcript-container">
                <div className="wrap-mic-transcript">
                    <div className="transcript-area"> {transcript}
                    </div>
                    <div className='mic-area'>
                        <span className='mic'>
                          { listening ? 
                          <i className="mic-icon fa-solid fa-microphone fa-2x" onClick={stopListening} > </i> :
                           <i className="mic-icon fa-solid fa-microphone-slash fa-2x" onClick={startListening}></i>
                           }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
