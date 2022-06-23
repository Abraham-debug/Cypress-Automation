/// <reference types= "cypress" />

describe("Instagram Regression Test suite",  () => {
    
  
    it("Validate that user with invalid details cannot login to the Instagram successfully",  () => {
    

        //visit instagram page
        cy.visit("https://www.instagram.com/")

        
     
        cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ').type('_stringx')
        cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ').type('Gambari')
        cy.get('.sqdOP > .qF0y9').click()
        cy.get('[data-testid=login-error-message]').should('be.visible')
      

    });
  
  });
  