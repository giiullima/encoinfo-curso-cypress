describe('Listagem Deve Funcionar', function(){

    it('O site está acessível', function(){
        cy.visit('https://books.toscrape.com/');
        cy.contains('We love being scraped!');
    });

    it('Deve mostrar a quantidade correta de livros',function(){
        cy.get('.product_pod').its('length').should('eq', 20);
    });

    it('Deve passar de página', function(){
        cy.get('a').contains('next').click();
        cy.contains('Page 2')
    });
});
