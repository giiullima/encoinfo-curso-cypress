describe('O site deve estar acessível', function() {
    
    it('Home deve estar acessível', function() {
        cy.visit('https://mmastats.com.br/');
        cy.contains('MMA Stats');
    });   

});