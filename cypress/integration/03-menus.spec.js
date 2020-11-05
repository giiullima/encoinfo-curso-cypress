describe('Menus devem estar acessíveis', function() {

    it('Home deve estar acessível', function() {
        cy.visit('https://mmastats.com.br/');
        cy.contains('MMA Stats');
    });

    
    it('Menu ranking lutadores deve funcionar', function() {
        cy.get("#rankings-lutadores").click();
        cy.contains('Ranking de Lutadores', { timeout: 20000 });
    });


    it('Menu saiba mais deve funcionar', function() {
        cy.get("#saiba-mais").click();
        cy.contains('Saiba Mais');
    });

});