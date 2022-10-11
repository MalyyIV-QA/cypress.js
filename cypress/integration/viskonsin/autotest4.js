describe('Тестирование login.qa.studio/', function () {
   it('Проверка на негативный кейс(неправильный логин) авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('greman@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();

        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })
})