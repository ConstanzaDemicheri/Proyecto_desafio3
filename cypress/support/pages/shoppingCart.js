export class ShoppingCartPage{

constructor(){

  this.total = "#price";



    }

    verifyPriceBlackJacket() {
    
    return cy.get('[name="25"]');

    }

    verifyNameBlackJacket() {
    
      return cy.get('[name="Black Jacket"]');
  
      }
  
      verifyPriceAndProductBlackJacket(name,price) {
    
        return cy.xpath(`//p[@name='${name}']//following-sibling::p[@name=${price}]`);
    
        }

        verifyPriceWitheShoes() {
    
          return cy.get('[name="30"]');
      
          }
      
          verifyNameWitheShoes() {
          
            return cy.get('[name="White Shoes"]');
        
            }

            verifyPriceAndProductWitheShoes(name,price) {
    
              return cy.xpath(`//p[@name='${name}']//following-sibling::p[@name=${price}]`);
          
              }

              clickShowTotalPrice() {
        
                return cy.xpath('//button[text()="Show total price"]')
            
                }

                checkAccumulatedPrice() {
        
                return cy.get(this.total);

              
              
                  }
}