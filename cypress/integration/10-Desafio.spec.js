describe('Login deve funcionar', function() {
    let loginUsername;
    let loginPassword;
    let loginUsernameV;
    let loginPasswordV;

    before(function(){
        cy.fixture('login').then(login => {
            loginUsername = login.username;
            loginPassword = login.password;
            loginUsernameV = login.usernameV;
            loginPasswordV = login.passwordV;
        });
    });

    it('O site deve estar acessível', function() {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.contains('Online Banking');
    });

    it('A área de menu deve estar acessível', function() {
        cy.get('#signin_button').click();
        cy.contains('Log in to ZeroBank');
    });

    it('Deve submeter e apresentar erro', function() {
        cy.meuLogin(loginUsername, loginPassword);
        cy.get('.alert.alert-error').should('be.visible');
    });

    it('Deve logar com sucesso', function() {
        cy.meuLogin(loginUsernameV, loginPasswordV);
        cy.contains('Cash Accounts');
    });
});