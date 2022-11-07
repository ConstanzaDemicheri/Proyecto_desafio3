/// <reference types="cypress" />

import { Register} from "../support/pages/register";
import { Login } from "../support/pages/login";
import { Home } from "../support/pages/home";
import { ProductsPage } from "../support/pages/products";
import { ShoppingCartPage } from "../support/pages/shoppingCart";


describe('desafio 3', () => {
    let LoginData
    let productsShop

    const register = new Register();
    const home = new Home();
    const login = new Login();
    const productsPage = new ProductsPage();
    const shoppingCartPage = new ShoppingCartPage();
    

   
   
    before('Before', () => {
        cy.fixture('LoginData').then(datos => {
            LoginData = datos
        })

        cy.fixture('productsShop').then(products => {
            productsShop = products

        
    })
})

    it('Preentrega', () => {
        let suma = (productsShop.productOne.price1) + (productsShop.productOtwo.price2); 
        cy.visit('');
        register.clickButtonLogin();
        login.writeUser(LoginData.user.username);
        login.writePassword(LoginData.user.password);
        login.ClickbuttonFirstLogin();
        home.clickButtonOnlineShop();
        productsPage.selectBlackJacket();
        productsPage.clickOnClosemodal();
        productsPage.selectWhiteShoes();
        productsPage.clickOnClosemodal();
        productsPage.clickButtonGoShoppingCart();
        shoppingCartPage.verifyPriceBlackJacket().should('have.text' , "$25");
        shoppingCartPage.verifyNameBlackJacket().should('have.text' , "Black Jacket");
        shoppingCartPage.verifyPriceAndProductBlackJacket(productsShop.productOne.name,productsShop.productOne.price1).should('have.text' , `$${productsShop.productOne.price1}`);
        shoppingCartPage.verifyPriceWitheShoes().should('have.text' , "$30");
        shoppingCartPage.verifyNameWitheShoes().should('have.text' , "White Shoes");
        shoppingCartPage.verifyPriceAndProductWitheShoes(productsShop.productOtwo.name,productsShop.productOtwo.price2).should('have.text' , `$${productsShop.productOtwo.price2}`);
        shoppingCartPage.clickShowTotalPrice().click();
        shoppingCartPage.checkAccumulatedPrice().should('exist');
        shoppingCartPage.checkAccumulatedPrice(productsShop.productOne.price1,productsShop.productOtwo.price2).should('exist');
        shoppingCartPage.checkAccumulatedPrice().should('have.text',suma);

        
    });


})

