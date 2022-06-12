import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
export default function Commands(props) {

    useEffect(() => {
        startListening();
    }, []);

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

    const commands = [
        {
            command: 'Alexa go (back) to home (page)',
            callback: () => {
                props.history.push('/');
                textToSpeech(`Redirecting To Home Page`);
                resetTranscript();
            }
        }
    ]

    // Speech Recognition
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition({ commands });

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    // Start And Stop Listening Function
    const startListening = () => SpeechRecognition.startListening({ continuous: true });
    const stopListening = () => SpeechRecognition.stopListening();

    console.log(transcript)

    return (
        <>
            <div id="command">
                <div className='alert-container'>
                    <div className="alert alert-primary" role="alert">
                        Note - Each of the command needs to start With "Alexa" !
                    </div>
                </div>
                <div className="container pt-2">
                    <div className="row align-items-stretch">
                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title"> Create Document</h4>
                                <span><i className="fa-solid fa-circle-info"></i> ( Creates a new empty doc ) </span>
                            </div>
                        </div>
                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Save Document</h4>
                                <span><i className="fa-solid fa-circle-info"></i> ( Save Changes ) </span>

                            </div>
                        </div>
                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Download Document</h4>
                                <span><i className="fa-solid fa-circle-info"></i> ( Download in word File ) </span>

                            </div>
                        </div>
                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Share Document with "persons email id"</h4>
                                <span><i className="fa-solid fa-circle-info"></i> ( Share via email ) </span>

                            </div>
                        </div>
                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title"> Open Document "document id" </h4>
                                <span><i className="fa-solid fa-circle-info"></i> ( Open document by saying document id ) </span>

                            </div>
                        </div>
                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Enter Title "title name"</h4>
                                <span><i className="fa-solid fa-circle-info"></i> ( Enter title of doc ) </span>

                            </div>
                        </div>
                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Replace word "word1" with "word2"</h4>
                                <span><i className="fa-solid fa-circle-info"></i> ( Replaces word in doc) </span>

                            </div>
                        </div>
                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Delete word "word"</h4>
                                <span><i className="fa-solid fa-circle-info"></i> ( Deletes a particular word from doc ) </span>

                            </div>
                        </div>
                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Go to home</h4>
                                <span><i className="fa-solid fa-circle-info"></i> (Navigate to home Page ) </span>

                            </div>
                        </div>
                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Type "statement"</h4>
                                <span><i className="fa-solid fa-circle-info"></i> (Types document body ) </span>

                            </div>
                        </div>
                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Clear document</h4>
                                <span><i className="fa-solid fa-circle-info"></i> ( Clears Complete document content ) </span>

                            </div>
                        </div>
                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Clear last statement</h4>
                                <span><i className="fa-solid fa-circle-info"></i> ( Clears only the recent statement ) </span>
                            </div>
                        </div>
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
        </>
    )
}
