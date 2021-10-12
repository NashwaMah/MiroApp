

import signupPage from "../models/pages/signup-page.js"
import signupData from "../test-helpers/testdata/signup-data.json"


const signup_page = new signupPage()

fixture`SignUp To Miro`
    .page`${signupData.signupURL}`;

signupData.hotmail.forEach(signup => {
    test("Sign Up to Miro using Normal way  ", async t => {
        console.log("------Start Test --------")
        console.log("Sign Up with user details ")
        await signup_page.SignUpToMiro(signup)
        console.log("Confirm Test Pass or Failed")
        await signup_page.CheckConfirmationMessage()
        console.log("------ End Test -------")
    });
});


// Tried automating using sign Up with google but not worked due to security access 
test.skip(" Sign Up to Miro using google", async t => {

    await signup_page.SignUpToMiroUsingGmail(signupData.gmail)
    await signup_page.CheckConfirmationMessage()

});




