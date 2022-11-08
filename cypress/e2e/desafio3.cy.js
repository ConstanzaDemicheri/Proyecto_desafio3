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
        productsPage.selectProduct(productsShop.productOne.name);
        productsPage.clickOnClosemodal();
        productsPage.selectProduct(productsShop.productOtwo.name);
        productsPage.clickOnClosemodal();
        productsPage.clickButtonGoShoppingCart();
        shoppingCartPage.verifyProduct(productsShop.productOne.name).should('exist');
        shoppingCartPage.verifyPricesAndProducts(productsShop.productOne.name,productsShop.productOne.price1).should('exist');       
        shoppingCartPage.verifyProduct(productsShop.productOtwo.name).should('exist');
        shoppingCartPage.verifyPricesAndProducts(productsShop.productOtwo.name,productsShop.productOtwo.price2).should('exist');     
        shoppingCartPage.clickShowTotalPrice().click();
        shoppingCartPage.checkAccumulatedPrice().should('exist');
        shoppingCartPage.checkAccumulatedPrice().should('have.text',suma);

        
    });


})

