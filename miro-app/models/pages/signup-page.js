require('dotenv').config()
import { t, Selector } from 'testcafe'
import Selectors from '../../test-helpers/selectors/miro-signup-selectors'



class SignUpPage {

    constructor() {

        //// sign up
        this.name = Selector(Selectors.signupPage.guestName)
        this.email = Selector(Selectors.signupPage.workEmail)
        this.password = Selector(Selectors.signupPage.password)
        this.hear_about_miro = Selector(Selectors.signupPage.hearAboutUs)
        this.signup_terms=Selector(Selectors.signupPage.signupTerms)
        this.signup_subscribe=Selector(Selectors.signupPage.signupSubscribe)
        this.submit_btn=Selector(Selectors.signupPage.submitBtn)
        this.wom_label=Selector("label").withText(Selectors.signupPage.womLabel)
        ///sign up with gmail 

        this.signup_gmail_btn=Selector(Selectors.signupGmail.signupGmail)
        this.signup_terms_gmail=Selector(Selectors.signupGmail.signupTerms)
        this.signup_subscribe_gmail=Selector(Selectors.signupGmail.signupSubscribe)
        this.cont_signup_gmail=Selector(Selectors.signupGmail.contToSignup)
        this.gmail_txt=Selector(Selectors.signupGmail.gmail)
        this.gmail_password=Selector(Selectors.signupGmail.gpassword)
        this.next_gmail=Selector(Selectors.signupGmail.next)
        /////confirmation message 
        this.confirmation_message=Selector("h1").withText(Selectors.signupPage.confirmationMessage)

    }

    async SignUpToMiro(guestInfo)
    {
        await t.typeText( this.name, guestInfo.name, { paste: true })
        await t.typeText(this.email , guestInfo.workEmail , {paste : true})
        await t.typeText(this.password , guestInfo.password ,{ paste: true } )
        if(await this.wom_label.exists)
        {
        await t.typeText(this.hear_about_miro , guestInfo.hearAboutUs,{ paste: true } )
        }
        await t.click(this.signup_terms )
        if(guestInfo.miroNews=="True")
        {
        await t.click( this.signup_subscribe )
        }
        await t.click( this.submit_btn)
    }

    ///Gmail is not working because of security problem 
    async SignUpToMiroUsingGmail(guestInfo)
    {

        await t.click(this.signup_gmail_btn)
        await t.click(this.signup_terms_gmail)
        if(guestInfo.miroNews=="True")
        {
        await t.click(this.signup_subscribe_gmail)
        }
        await t.click(this.cont_signup_gmail)
        await t.typeText(this.gmail_txt ,guestInfo.gmail )
        await t.click(this.next_gmail)
        await t.typeText(this.gmail_password , guestInfo.password)
        await t.click(this.next_gmail)

    }

    async CheckConfirmationMessage()
    {
      await t.expect(await this.confirmation_message.exists).ok()
    }
    

}
export default SignUpPage