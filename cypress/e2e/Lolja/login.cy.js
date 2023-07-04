describe('Login',()=>{
    beforeEach(()=>{
        cy.visit('https://www.lolja.com.br')
        cy.clearCookies()
        cy.get('.lgpd-banner-action > button').click()
        
    });

    it('Tentativa de login com usuario errado', ()=>{
        
    });

    it('Tentativa de login sem Username', () =>{

    });

    it('Tentativa de login sem senha', () =>{
        
    });

    it('Tentativa de login sem credenciais', () =>{
        
    });
})