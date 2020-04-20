# Computer Science Challenges - Smart Context Information with Augmented Reality
_Developed by Peter Davison_

### About
The main aim of this project is to aid future developers working on Augmented Reality applications that use AR.js and A-frame. The plan is to combine AR.js and Flask to create a web framework running off a Raspberry Pi, or a similar alternative, to enable multiple users to connect and create Augmented Reality Object Information Panels for when they scan certain markers. The framework will then return the associated information about the Objects to the users phone. This allows the user's phone to display the Object Information Panels in real time on their device.

This project will utilise the tools provided by [AR.js](https://github.com/jeromeetienne/AR.js) for the Augmented Reality side and [Flask](https://github.com/pallets/flask) for the web framework on the Raspberry Pi. AR.js uses Marker-based Augmented Reality, which means if a camera detects a recognised marker then the device will produce the corresponding AR model ontop of the marker for the user to see. 

### Guide to the GitHub Repository

This section is for developers who want to use this repository for their own development.

#### Web Application
The AR standalone version can be found [here](https://peterdavison01.github.io/CSchallenges/). This demonstrates a simple AR marker-based app that produces different coloured squares. This application is mainly used for testing which explains it's limited capabilities. 

#### The sourceCode folder
This folder contains all the source code for the whole AR application. Each source code file, whether it be HTML, Python or JavaScript, will contain comments to guide developers. Below are the contents of the folders:
##### main.py
This Python file is desgined to run on a Raspberry Pi, or alike, to produce a web framework run by Flask. It loads specific HTML pages when the URl changes.
##### The static folder
The static folder contains all of the JavaScript and CSS files that the AR application use. The layout is based off an Object Orientated Programming style, hence the Object.js and individual function files (CreateNewObject.js, ChangeObjectDetails.js and DeleteObject.js). CreateNewObject.js, ChangeObjectDetails.js and DeleteObject.js are built to give functionality to their HTML couterparts, containing code that states where the inputs of the text boxes are stored and what each button does. The OIP.js file does two main jobs. It contains the functions that are called by CreateNewObject.js, ChangeObjectDetails.js and DeleteObject.js when a button is pushed on their corresponding HTML forms, which then alters the URL that leads to the Flask framework loading the allocated page. It also contains the functions that return all the information so that the users device can display the object's information on their own Object Information Panel in Augmented Reality.
##### The templates folder
The templates folder contains all of the HTML files that are loaded whilst running the application. Index.html is the main program that the application runs off. It is written in HTML and fully commented for ease of modification and can be found in this folder. The other HTML files, createNewObject.html, changeObjectDetails.html and deleteObject.html are all mainly HTML forms that the user can fill in to achieve the purpose of each file if they wish to do so.
