describe('Teste de categoria', ()=>{

    beforeEach(()=>{
        cy.viewport(1080,720);
        cy.visit('https://www.lolja.com.br');
        cy.clearCookies();
        cy.get('.lgpd-banner-action > button').click();
        cy.get('#search-products').type('test')
        cy.get('button.cmp-newsletter-popup-2de3IYL6pfqD7JbmRpegCC').click();
    });

    it('Acessar todas as categorias', ()=>{
        cy.get(':nth-child(1) > .menu-title').click({force: true});
        cy.get('.title').should('contain.text', 'COLEÇÕES');

        cy.get(':nth-child(2) > .menu-title').click({force: true});
        cy.get('.title').should('contain.text', 'CAMISETAS');

        cy.get(':nth-child(3) > .menu-title').click({force: true});
        cy.get('.title').should('contain.text', 'BLUSÃO');

        cy.get(':nth-child(4) > .menu-title').click({force: true});
        cy.get('.title').should('contain.text', 'MOLETONS');

        cy.get(':nth-child(5) > .menu-title').click({force: true});
        cy.get('.title').should('contain.text', 'MANGA LONGA');

        cy.get(':nth-child(6) > .menu-title').click({force: true});
        cy.get('.title').should('contain.text', 'PARCEIROS');

        cy.get(':nth-child(7) > .menu-title').click({force: true});
        cy.get('.title').should('contain.text', 'CREATORS');

        cy.get(':nth-child(8) > .menu-title').click({force: true});
        cy.get('.title').should('contain.text', 'CRTISTAS');

        cy.get(':nth-child(9) > .menu-title').click({force: true});
        cy.get('.title').should('contain.text', 'CANECAS');
    });

    it('Filtro de cor', ()=>{
        cy.get(':nth-child(2) > .menu-title').click({force: true});
        cy.get('.title').should('contain.text', 'CAMISETAS');

        cy.get(':nth-child(1) > .color-value-text')
            .should('contains.text', 'Preto')
            .click({force: true});
        cy.get(':nth-child(1) > .description > .name > a')
    });

    it('Filtro de tamanho', ()=>{
        cy.get(':nth-child(2) > .menu-title').click({force: true});
        cy.get('.title').should('contain.text', 'CAMISETAS');
        cy.get(':nth-child(3) > .vnda-products-filter-vertical-properties-content > .component-products-filter-grid > :nth-child(2)').click({force:true});
    });

    it('Filtro de sexo', ()=>{
        cy.get(':nth-child(2) > .menu-title').click({force: true});
        cy.get('.title').should('contain.text', 'CAMISETAS');
        cy.get(':nth-child(4) > .vnda-products-filter-vertical-properties-content > .component-products-filter-grid > :nth-child(2)').click({force:true});
    });

    it('Filtro de preço', ()=>{
        cy.get(':nth-child(2) > .menu-title').click({force: true});
        cy.get('.title').should('contain.text', 'CAMISETAS');
    });

    it('Filtro de ordem', ()=>{
        cy.get(':nth-child(2) > .menu-title').click({force: true});
        cy.get('.title').should('contain.text', 'CAMISETAS');
        cy.get('.vnda-products-filter-vertical-sort-content > .component-products-filter-block > :nth-child(4) > .list-value-image').click({force:true});

    });

    it('Todos os filtros', ()=>{
        cy.get(':nth-child(2) > .menu-title').click({force: true});
        cy.get('.title').should('contain.text', 'CAMISETAS');
    });

    it('Limpar filtros', ()=>{
        cy.get(':nth-child(2) > .menu-title').click({force: true});
        cy.get('.title').should('contain.text', 'CAMISETAS');
    });
})