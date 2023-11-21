const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get pageTitle () {
        return $('.app_logo');
    }
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    get errorMessage() { 
        return $('.error-message-container'); 
    }

  
    async setCredentials (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
    }

    async clearUsername () {
        await this.inputUsername.clearValue();
    }

    async clearPassword () {
        await this.inputPassword.clearValue();
    }



    async submit () {
        await this.btnSubmit.click();
    }

    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
