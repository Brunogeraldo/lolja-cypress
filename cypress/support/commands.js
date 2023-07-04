import { faker } from "@faker-js/faker/locale/pt_BR";
import faker_br from "faker-br"

Cypress.Commands.add("purchase_pix", () => {
    cy.get('.card-drawer-cta').click({ force: true });
    cy.get('.checkout-header-content > .tw-text-lg').should('contains.text', 'Checkout');
    cy.get('.cta-button').click();

    cy.get('#email').type(faker.internet.email());
    cy.get('.cta-button').click({ force: true });

    cy.get('#first_name').type(faker.person.firstName());
    cy.get('#last_name').type(faker.person.lastName());
    cy.get('#phone').type(faker.phone.number('+55 4# #########'));
    cy.get('#birthdate').type("19062000");
    cy.get('#cpf').type(faker_br.br.cpf());
    cy.get('.cta-button').click();

    cy.get('.form-title > .tw-flex').should('contains.text', 'Entrega');
    cy.get('.validating').type('53240-390');
    cy.get('.submit').click({ force: true });
    cy.wait(3000);
    cy.get('.cta-button').click({ force: true });
    cy.get('.cta-button').click()
    cy.get('#street_number').type(faker.number.int());
    cy.get('.cta-button').click({ force: true });

    cy.get('.form-title').should('contain.text', 'Pagamento');
    cy.get('.link-bt.pix > .wrapper').click({ force: true });
    cy.get('div.pix > .form-title').should('contain.text', 'Pagar com Pix');
    cy.get('.cta-button').click({ force: true });

    cy.get('.tw-my-4 > .tw-text-lg').should('contain.text', 'Recebemos seu pedido!');
});

Cypress.Commands.add('search_product_simple', (name) => {
    cy.get('[id="search-products"]').type(name);
    cy.get('button.btn-search').click({force: true});
    cy.get('.list-products > :nth-child(1)')
        .should('be.visible')
        .click();
    cy.get('div.actions-wrapper [type="submit"]').click({ force: true });
});

Cypress.Commands.add('search_product_size', (name) => {
    cy.get('[id="search-products"]').type(name);
    cy.get('button.btn-search').click({force: true});

    cy.get('.list-products > :nth-child(1)')
        .should('be.visible')
        .click();
    cy.get('.product-infos > .add-to-cart > .attributes > .option-tamanho > .inner > .M > .text').click({ force: true })
    cy.get('.product-infos > .add-to-cart > .actions-wrapper > .add-to-cart-button').click({ force: true });
});