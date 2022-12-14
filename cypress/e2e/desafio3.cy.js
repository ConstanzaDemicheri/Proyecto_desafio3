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
        let name1 = productsShop.productOne.name
        let priceOne = productsShop.productOne.price1
        let name2 = productsShop.productOtwo.name
        let priceTwo = productsShop.productOtwo.price2


        cy.visit('');
        register.clickButtonLogin();
        login.writeUser(LoginData.user.username);
        login.writePassword(LoginData.user.password);
        login.ClickbuttonFirstLogin();
        home.clickButtonOnlineShop();
        productsPage.selectProduct(productsShop.productOne.name);
        productsPage.clickOnClosemodal();
        productsPage.selectProduct(productsShop.productOtwo.name);
        productsPage.clickOnClosemodal();
        productsPage.clickButtonGoShoppingCart();
        shoppingCartPage.verifyProduct(productsShop.productOne.name).should('have.text',name1);
        shoppingCartPage.verifyPricesAndProducts(productsShop.productOne.name,productsShop.productOne.price1).should("have.text", `$${priceOne}`);       
        shoppingCartPage.verifyProduct(productsShop.productOtwo.name).should('have.text',name2);
        shoppingCartPage.verifyPricesAndProducts(productsShop.productOtwo.name,productsShop.productOtwo.price2).should("have.text",`$${priceTwo}`);     
        shoppingCartPage.clickShowTotalPrice().click();
        shoppingCartPage.checkAccumulatedPrice().should('have.text',suma);

        
    });


})

