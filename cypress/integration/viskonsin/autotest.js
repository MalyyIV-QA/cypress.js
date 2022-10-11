
describe('Тестирование login.qa.studio/', function () {
   it('Автотест на проверку логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('amadorgrote@mail.ru');
        cy.get('#restoreEmailButton').click();

        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon');
    })
})
