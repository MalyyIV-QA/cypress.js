describe('Тестирование login.qa.studio/', function () {
   it('Автотест проверки staya.dog', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('amadorgrote@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('Viskonsin111022');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');

    })
})