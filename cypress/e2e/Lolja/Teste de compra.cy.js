import { faker } from "@faker-js/faker/locale/pt_BR";
import faker_br from "faker-br"

describe('Teste de compra',() =>{
    beforeEach(() => {
        cy.visit('https://www.lolja.com.br')
        cy.clearCookies()
        cy.get('.lgpd-banner-action > button').click()
    });

    it('Compra de 1 item sem login',()=>{
        cy.search_product_simple('CAMISA BRANCA - 80SKIDS');

        cy.purchase_pix();
    });

    it('Compra de mais de 2 itens', ()=>{
        cy.search_product_simple('CAMISA BRANCA - 80SKIDS');
        
        cy.get('.cart-drawer-header > .cart-drawer-focusable').click();

        cy.search_product_size('BLUSA RECORTES - CARINA');

        cy.purchase_pix();
    });
})