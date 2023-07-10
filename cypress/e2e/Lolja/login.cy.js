describe('Login',()=>{
    beforeEach(()=>{
        cy.visit('https://www.lolja.com.br')
        cy.clearCookies()
        cy.get('.lgpd-banner-action > button').click()
        cy.get('#search-products').type('test')
    });

    it('Tentativa de login com usuario errado',{ scrollBehavior: false }, ()=>{
        cy.get('a.user').click({force: true});
        cy.get('div.cmp-login-block > :nth-child(2) > .cmp-login-block').click({force: true});
        
        cy.get('div.cmp-login-block > form > .cmp-login-grid > :nth-child(1) > #email').type('Email@email.com.br');
        cy.get('#password').type('cNRZBZAa1N11');
    });

    it('Tentativa de login sem Email',{ scrollBehavior: false }, () =>{
        cy.get('a.user').click({force: true});
        cy.get('div.cmp-login-block > :nth-child(2) > .cmp-login-block').click({force: true});

        cy.get('#email').type(' ');
        cy.get('#password').type('cNRZBZAa1N11');
    });

    it('Tentativa de login sem senha',{ scrollBehavior: false }, () =>{
        cy.get('a.user').click({force: true});
        cy.get('div.cmp-login-block > :nth-child(2) > .cmp-login-block').click({force: true});

        cy.get('#email').type('');
        cy.get('#password').type('  ');
    });

    it('Tentativa de login sem credenciais',{ scrollBehavior: false }, () =>{
        cy.get('a.user').click({force: true});
        cy.get('div.cmp-login-block > :nth-child(2) > .cmp-login-block').click({force: true});

        cy.get('#email').type('  ');
        cy.get('#password').type('  ');
    });
})