export class ShoppingCartPage{

constructor(){

  this.total = "#price";
  this.verTotal = "//button[text()='Show total price']";


 }

    verifyProduct(veryfyProduct){
      return cy.get(`p[name='${veryfyProduct}']`);
  }

  
    verifyPricesAndProducts(Name,Price){
    
        return cy.xpath(`//p[@name='${Name}']//following-sibling::p[@name=${Price}]`);
    
        }


              clickShowTotalPrice() {
        
                return cy.xpath(this.verTotal);
            
                }

                checkAccumulatedPrice() {
        
                return cy.get(this.total);

              
              
                  }
}