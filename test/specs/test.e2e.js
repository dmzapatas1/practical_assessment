const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')

describe('UC-1  Test Login form with empty credentials', () => {
    
    it('should show an error for empty username', async () => {

        await LoginPage.open()

        await LoginPage.setCredentials('test1', 'test1')
    
        await LoginPage.clearUsername()
        await LoginPage.clearPassword()

       await LoginPage.submit()

       const error = await LoginPage.errorMessage

       await browser.waitUntil(
         async()=>
         await error.isDisplayed(),
          { timeout: 10000, interval: 600, timeoutMsg: "not displayed" }
        )
        const errorText = await error.getText()
        expect(errorText).toContain('Epic sadface: Username is required')   
    })    
})

describe('UC-2 Test Login form with credentials by passing Username', () => {
it('should show error message for empty password', async () => {
    await LoginPage.open()

    await LoginPage.setCredentials('test1', 'test1')

    await LoginPage.clearPassword()

   await LoginPage.submit()

   const error = await LoginPage.errorMessage

   await browser.waitUntil(
     async()=>
     await error.isDisplayed(),
      { timeout: 10000, interval: 600, timeoutMsg: "not displayed" }
    )
    const errorText = await error.getText()
    expect(errorText).toContain('Epic sadface: Password is required')   
})
})
describe('UC-3 Test Login form with credentials by passing Username & Password', () => {

it('should login with valid credentials and validate the dashboard title', async () => {
    await LoginPage.open()

    await LoginPage.setCredentials('standard_user','secret_sauce')

   await LoginPage.submit()

   const title = LoginPage.pageTitle

   await browser.waitUntil(
    async()=>
    await title.isDisplayed(),
     { timeout: 10000, interval: 600, timeoutMsg: "not displayed" }
    )
    const titleText = await title.getText()
    expect(titleText).toHaveTextContaining('Swag Labs');
})
})
