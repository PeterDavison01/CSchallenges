# Computer Science Challenges - Smart Context Information with Augmented Reality
_Developed by Peter Davison_

### About
The main aim of this project is to aid future developers working on Augmented Reality applications that use AR.js and A-frame. The plan is to combine AR.js and Flask to create a web framework running off a Raspberry Pi, or a similar alternative, to enable multiple users to connect and transmit images of markers they scan. The framework will then return the associated models and animations back to the users phone. This allows the user's phone to withhold from the heavy processing and only has to scan a marker and display the models and animations when receiving them from the web framework.

This project will utilise the tools provided by [AR.js](https://github.com/jeromeetienne/AR.js) for the Augmented Reality side and [Flask](https://github.com/pallets/flask) for the web framework on the Raspberry Pi. AR.js uses Marker-based Augmented Reality, which means if a camera detects a recognised marker then the device will produce the corresponding AR model ontop of the marker for the user to see. 

### Web Application
The AR standalone version can be found [here](https://peterdavison01.github.io/CSchallenges/). This demonstrates a simple AR marker-based app that produces different coloured squares. This application is mainly used for testing which explains it's limited capabilities. 
