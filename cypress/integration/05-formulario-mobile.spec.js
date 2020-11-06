describe('Formulário Deve Funcionar - IPhone', function() {
    
    it('Site deve estar acessível', function() {
        cy.viewport('iphone-x');
        cy.visit('https://jhemesonmotta.github.io/testaveis-curso-cypress/index-1.html');
        cy.contains('Meu Formulário');
    });

    it('Deve preencher os dados corretamente', function() {
        cy.viewport('iphone-x');
        cy.get('#nome').type('Humberto Gessinger');
        cy.get('#idade').type('53');
    });

    it('Deve submeter corretamente', function() {
        cy.viewport('iphone-x');
        cy.get('button').contains('Enviar').click();
        cy.get('h2').contains('Sucesso, meu patrão');
    });

});

describe('Formulário Deve Funcionar - Outro Mobile', function() {
    
    it('Site deve estar acessível', function() {
        cy.viewport(360, 740);
        cy.visit('https://jhemesonmotta.github.io/testaveis-curso-cypress/index-1.html');
        cy.contains('Meu Formulário');
    });

    it('Deve preencher os dados corretamente', function() {
        cy.viewport(360, 740);
        cy.get('#nome').type('Humberto Gessinger');
        cy.get('#idade').type('53');
    });

    it('Deve submeter corretamente', function() {
        cy.viewport(360, 740);
        cy.get('button').contains('Enviar').click();
        cy.get('h2').contains('Sucesso, meu patrão');
    });

});