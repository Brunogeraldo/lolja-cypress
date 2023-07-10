describe('',()=>{
    beforeEach(()=>{
        cy.visit('https://www.lolja.com.br')
        cy.clearCookies()
        cy.get('.lgpd-banner-action > button').click()
        cy.get('#search-products').type('test').clear()
        
    })

    it('Pesquisa normal',()=>{
        cy.get('#search-products').type('manga longa');
        cy.get('.btn-search').click({force:true});
        cy.get('.title').should('contain.text', 'manga longa')
    });

    it('Pesquisa com caracteris especiais',()=>{
        cy.get('#search-products').type('!@#%¨&$*(#)(_+)&');
        cy.get('.btn-search').click({force:true});
        cy.get('.title').should('contain.text', '!@#%¨&$*(#)(_+)&');
    });

    it('Pesquisa vazia',()=>{
        cy.get('#search-products').type('  ');
        cy.get('.btn-search').click({force:true});
    });

    it('Pesquisa campo limpado',()=>{
        cy.get('#search-products').type('Camiseta')
        cy.get('.btn-search').click({force:true});
        
        cy.get('#search-products').type('Camiseta').clear()
        cy.get('.btn-search').click({force:true});
    });
})