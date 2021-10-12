
Automation Project
Language : Javascript

Framework : Test Cafe

Before run the project :

Download Node.js

inside Project Terminal run below :

sudo npm install 
sudo  npm start
npm install -g testcafe 
npm install --save @ffmpeg-installer/ffmpeg
npm install -g allure-commandline --save-dev


To Run Miro automation on :

Chrome  : npm run test:chrome 
Firefox  : npm run test:firefox 
Safari  : npm run test:safari 
edge  : npm run test:edge 


To Update Test data for Miro Signup :

Update json file ../test-helpers/testdata/signup-data.json

Notes:
1) Make sure the browser used in run the scripts is already installed in your machine 
2) You can check recordings for the run under ../artifacts/ folder

