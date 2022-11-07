export class Home{

    constructor() {
        this.buttonOnlineShop = '#onlineshoplink';
    }
    
    clickButtonOnlineShop() {
        cy.get(this.buttonOnlineShop).click();
    }
    
    
    }