import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function Document(props) {

    const [title, setTitle] = useState('');
    const [documentBody, setDocumentBody] = useState('');
    const [lastStatement, setLastStatement] = useState('');

    // Get Document Id from URL
    const documentId = props.match.params.id;

    // Populate Document if it exists
    useEffect(() => {
        // check if id exists in localStorage
        if (localStorage.getItem(documentId)) {
            // Get document from localStorage
            const document = JSON.parse(localStorage.getItem(documentId));
            // Set title and body
            setTitle(document.title);
            setDocumentBody(document.body);
        }
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

    // Function to capitalize 1st letter of statement
    function capitalize(s) {
        return s[0].toUpperCase() + s.slice(1);
    }

    // All Commands Array of document
    const commands = [
        {
            command:"Alexa show commands",
            callback:()=>{
                textToSpeech("Navigating to Commands Page");
                props.history.push('/commands');
            }
        },
        {
            command: 'Alexa (enter) title *',
            callback: (title) => {
                setTitle(capitalize(title));
                textToSpeech(`Title set to ${title}`);
                resetTranscript();
            }
        },
        {
            command: 'Alexa type *',
            callback: (textBody) => {
                var text;
                if (documentBody == ''){
                    text = capitalize(textBody);
                }
                else {
                    text = documentBody + ' ' + capitalize(textBody);
                }
                setLastStatement(documentBody);
                setDocumentBody(text);
                textToSpeech(`Statement added !`);
                resetTranscript();
            }
        },
        {
            command: 'Alexa save (document)',
            callback: () => {
                var jsonData = {
                    documentId: documentId,
                    title: title,
                    body: documentBody
                }
                localStorage.setItem(documentId, JSON.stringify(jsonData));
                textToSpeech(`Document saved`);
                resetTranscript();
            }
        },
        {
            command: 'Alexa replace *',
            callback: (text) => {
                var arr = text.split(' ');
                setDocumentBody(documentBody.replaceAll(arr[0], arr[2]));
                textToSpeech(`${arr[0]} replaced with ${arr[2]}`);
                resetTranscript();
            }
        },
        {
            command: 'Alexa delete *',
            callback: (text) => {
                setDocumentBody(documentBody.replaceAll(text, ''));
                textToSpeech(`${text} deleted`);
                resetTranscript();
            }
        },
        {
            command: 'Alexa download (document)',
            callback: () => {
                console.log("Downloading Document");
                Export2Word("document-area", `document-${documentId}`);
                textToSpeech(`Document downloaded`);
                resetTranscript();
            }
        },
        {
            command: 'Alexa share (document) with *',
            callback: (email) => {
                let trimmed_email = email.split(' ').join('').toLowerCase().replace('attherate', '@');
                console.log("Trimmed Email ",trimmed_email);
                sendMail();
                resetTranscript();
            }
        },
        {
            command: 'Alexa clear document',
            callback: () => {
                setDocumentBody('');
                textToSpeech(`Document cleared`);
                resetTranscript();
            }
        },
        {
            command: 'Alexa clear last statement',
            callback: () => {
                setDocumentBody(lastStatement);
                setLastStatement('');
                textToSpeech(`Last Statement cleared`);
                resetTranscript();
            }
        },
        {
            command:'Alexa go (back) to home (page)',
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

    // Function to download word file from html 
    function Export2Word(element, filename = '') {
        var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
        var postHtml = "</body></html>";
        var html = preHtml + document.getElementById(element).innerHTML + postHtml;

        var blob = new Blob(['\ufeff', html], {
            type: 'application/msword'
        });

        console.log(blob);

        // Specify link url
        var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);


        // Specify file name
        filename = filename ? filename + '.doc' : 'document.doc';

        // Create download link element
        var downloadLink = document.createElement("a");

        document.body.appendChild(downloadLink);

        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            // Create a link to the file
            downloadLink.href = url;

            // Setting the file name
            downloadLink.download = filename;

            //triggering the function
            downloadLink.click();
        }

        document.body.removeChild(downloadLink);
    }

    // Function to send mail 
    function sendMail() {
        const ele = document.getElementById('document-area');
        var data = btoa(ele.innerHTML);
        var dataUri = "data:" + 'application/msword' + ";base64," + data;
        console.log("Data ", dataUri);
        window.Email.send({
            Host: "smtp.elasticemail.com",
            Port: 2525,
            Username: "shettyrohit268@gmail.com",
            Password: "961CCBA491B80A118101899A82CBD6217988",
            To: `prajapatirahul1712001@gmail.com`,
            From: "shettyrohit268@gmail.com",
            Subject: "Hello from rahul",
            Body: `Word Doc`,
            Attachments: [
                {
                    name: 'document.doc',
                    data: dataUri
                }]
        }).
        then(
            message => {
                textToSpeech(`Document Shared Successfully`);
            }
        )
        .catch(err => {
            textToSpeech(`Document Shared Failed`);
        });
    }

    console.log(transcript);

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
                            <i onClick={() => {
                                Export2Word("document-area", `document-${documentId}`);
                            }} className="icon fa-solid fa-download fa-2x"></i>
                        </div>
                        <div className='share-button'>
                            <i onClick={sendMail} className="icon fa-solid fa-share-nodes fa-2x"></i>
                        </div>
                    </div>
                    <div id='document-area' className='document-area'>
                        <div className='document-title'>
                            <h1>{title != '' ? title : "Enter a Title"}</h1>
                        </div>
                        <div className='document-body'>
                            <p style={{color:"black"}}>{documentBody != '' ? documentBody : "Say Alexa Type to type document body"}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mic-transcript-container">
                <div className="wrap-mic-transcript">
                    <div id='transcript' className="transcript-area">
                        {transcript}
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
