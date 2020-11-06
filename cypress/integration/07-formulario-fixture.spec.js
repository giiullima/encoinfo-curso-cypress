describe('Formulário deve funcionar', function(){
    let usuarioNome;
    let usuarioIdade;

    before(function(){
        cy.fixture('usuario').then(usuario => {
            usuarioNome = usuario.nome;
            usuarioIdade = usuario.idade
        });
    });

    it('Site deve estar acessível', function() {
        cy.visit('https://jhemesonmotta.github.io/testaveis-curso-cypress/index-1.html');
        cy.contains('Meu Formulário');
    });

    it('Deve preencher os dados corretamente', function() {
        cy.get('#nome').type(usuarioNome);
        cy.get('#idade').type(usuarioIdade);
    });

    it('Deve submeter corretamente', function() {
        cy.get('button').contains('Enviar').click();
        cy.get('h2').contains('Sucesso, meu patrão');
    });
});