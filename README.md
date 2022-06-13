
# CodeDamn hackfest 3rd Place :3rd_place_medal:
---
## Speech Docs — Interact vocally with Documents
---
From School students to university students and to working professionals everyone has its’s daily dependencies on word documents. This documents can be used to convey their ideas, projects or even sometimes taking notes. Keyboard and mouse are useful for most but there are some individuals who have unsupportable conditions such as Arthritis in the hand, Parkinson’s, Carpal Tunnel Syndrome, or Essential Tremor for which keyboard is painful.

To solve this problem we come up with a solution Speech docs. Speech docs aims to solve such problem by enabling only voice to interact with the documents. Users can give commands by their voice to perform any operations such as create, open, write, replace word, etc.

---
## Overview
Speech Docs is a tool for editing documents with your speech. You can create a new document, update its contents using functions such as (replace, delete, clear, enter title, type body, etc.) and save it, as well as download or export the document to a word file and share it with anybody via email.

It is designed for people who are unable to type on a keyboard or utilize word processing software. Speech Docs also allows you to navigate using your speech. Voice commands can also be used to navigate between pages. Before each command, the user must utter the “Trigger Word,” which is akin to the Amazon and Google concepts of “Alexa” and “Ok Google.” We use “Alexa” as our “Trigger Word” in Speech Docs. This ensures that commands do not conflict with the user’s natural language.

----
## Working
We use browsers “localstorage” to store all the user documents in key-value pairs or JSON format. A unique document id is assigned for each document so that we can easily retrieve document contents from localstorage by using document id. We encode the document text into base64 format and then attach it to the email body using the smtp js library to share it over email. For downloading the document we convert the text into a downloadable word file link and then use js click() function to click the download link. In addition, we use “text to speech” to provide feedback for each command if it is correctly detected.

## Speech Docs Functions

- Create documents
- Open documents
- Save documents
- Download documents
- Share documents
- Change words
- Delete words and sentences
---

## Project Screenshots
Home Page

![App Screenshot](https://user-images.githubusercontent.com/71189359/173292280-f1138e96-a0f2-4f43-9b68-220b2d8474f1.png)

Document Page

![App Screenshot](https://user-images.githubusercontent.com/71189359/173292376-9924391a-60d8-4c30-9dc7-699913654ad4.png)

Commands Page

![App Screenshot](https://user-images.githubusercontent.com/71189359/173292491-cbd7f342-26a2-4695-99a8-d7f1ea88e1cf.png)

---

## Tech Stack
- React.js for building the app
- For speech recognition and Natural Language Processing we use react-speech-recognition npm library which under the hood uses Google Speech API
- For text to speech we use Speech Synthesis which is inbuilt in JS

---

## Run Locally

Clone the project

```bash
  git clone https://github.com/rahulp-github/codedamn-hackfest
```

Go to the project directory

```bash
  cd codedamn-hackfest
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```
---
## Links
- View Full Article at - https://medium.com/@pandeyhrithik663/speech-docs-interact-with-documents-972e67688d60
- Project Deployed At - https://rahulp-github.github.io/codedamn-hackfest/
- Codedamn Hackfest - https://codedamn.com/hackfest
---
## Authors

- [Vishal Pandey](https://github.com/addtogether)
- [Hrithik Pandey](https://github.com/Hrithik2009)
- [Rahul Prajapati](https://github.com/rahulp-github)


