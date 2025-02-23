describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт 
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки "Забыли пароль"

         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажала кнопку "Войти"

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что вижу нужный текст
         cy.get('#messageHeader') .should('be.visible'); // Проверяю, что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что есть крестик и он виден пользователю

        })

         it('Верный логин и неверный пароль', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт 
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки "Забыли пароль"
        
            cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
            cy.get('#pass').type('iLoveqastudio7'); // Ввели неверный пароль
            cy.get('#loginButton').click(); // Нажала кнопку "Войти"
        
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что вижу нужный текст
            cy.get('#messageHeader') .should('be.visible'); // Проверяю, что текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что есть крестик и он виден пользователю
            
        })

        it('Неверный логин и верный пароль', function () {
           cy.visit('https://login.qa.studio/'); // Зашли на сайт 
           cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки "Забыли пароль"
       
           cy.get('#mail').type('germann@dolnikov.ru'); // Ввели неверный логин
           cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
           cy.get('#loginButton').click(); // Нажала кнопку "Войти"
       
           cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что вижу нужный текст
           cy.get('#messageHeader') .should('be.visible'); // Проверяю, что текст виден пользователю
           cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что есть крестик и он виден пользователю
        })

        it('Логин введен без @ и верный пароль', function () {
           cy.visit('https://login.qa.studio/'); // Зашли на сайт 
           cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки "Забыли пароль"
       
           cy.get('#mail').type('germanndolnikov.ru'); // Ввели логин без @
           cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
           cy.get('#loginButton').click(); // Нажала кнопку "Войти"
       
           cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяю, что вижу нужный текст
           cy.get('#messageHeader') .should('be.visible'); // Проверяю, что текст виден пользователю
           cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что есть крестик и он виден пользователю
        })
   
    it('Логин введен строчными буквами и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт 
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки "Забыли пароль"
    
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин строчными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажала кнопку "Войти"
    
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что вижу нужный текст
        cy.get('#messageHeader') .should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что есть крестик и он виден пользователю
        

    })
   
    it('Проверка востановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт 
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки "Забыли пароль"
    
        
        cy.get('#forgotEmailButton').click(); // Нажала кнопку "Забыли пароль"
        cy.get('#mailForgot').type('german@dolnikov.ru'); //Ввела почту
        cy.get('#restoreEmailButton').click(); // Нажала кнопку "Отправить код"
    
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверяю, что вижу нужный текст
        cy.get('#messageHeader') .should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что есть крестик и он виден пользователю
    
    
                 });
             })
             describe('Покупка аватара', function () {

                it('2e2 покупка аватара', function () {
                   cy.visit('https://pokemonbattle.ru/'); // Зайти на сайт
             
                   cy.get(':nth-child(1) > .auth__input').type('infinityinadream@yandex.ru'); // Ввод верного логина
                   cy.get('#password').type('Kotik123'); // Ввод верного пароля
                   cy.get('.auth__button').click(); // Нажать войти
                   cy.get('.header__container > .header__id').click(); // Нажать на header_id
                   cy.get('[href="/shop"]').click(); // Нажать на "Смена аватара"
                   cy.get('.available > button').first().click({ force: true }); // кликаем Купить у первого доступного аватара
                   cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111'); // Ввод номера карты
                   cy.get(':nth-child(1) > .pay_base-input-v2').type('1230'); // Ввод срок действия карты
                   cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Ввод CVV карты
                   
                   cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Archer Man'); // Ввод имя владельца действия карты
                   cy.get('.pay-btn').click(); // Нажать кнопку "Оплатить"
                   cy.get('#cardnumber').type('56456'); // Ввод кода подтверждения СМС
                   cy.get('.payment__submit-button').click(); // Нажать кнопку Отправить
                   cy.contains('Покупка прошла успешно').should('be.visible'); // Надпись "Покупка прошла успешно"
                  
                  })
             
             })
             
            
            
      
    



   
    


