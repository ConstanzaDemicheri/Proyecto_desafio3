export class Login{

    constructor() {
        this.userInput = '#user'
        this.passInput = '#pass'
        this.buttonFirstLogin = '#submitForm'

        
    }
    
    writeUser(user) {
        cy.get(this.userInput).type(user);
    }
    
    writePassword(pass) {
        cy.get(this.passInput).type(pass);
    }
    
    ClickbuttonFirstLogin() {
        cy.get(this.buttonFirstLogin).click();
    }
    }