export class ProductsPage{
    constructor(){
        this.blackJacketButton = ('#blackJacket')
        this.modalButton = ('#closeModal')
        this.whiteshoesButton = ("#whiteshoes")
        this.buttonGoShoppingCart = ('#goShoppingCart')
    }
    selectBlackJacket() 
    {
        cy.get(this.blackJacketButton).click();

    }
    clickOnClosemodal() 
    {
        cy.get(this.modalButton).click();

    }
    selectWhiteShoes()
    {
        cy.get(this.whiteshoesButton).click();
    }
    clickButtonGoShoppingCart()
    {
        cy.get(this.buttonGoShoppingCart).click();
    }


}