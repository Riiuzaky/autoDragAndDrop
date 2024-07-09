import { Login } from "../src/task/Login";
import { test } from "@playwright/test";
import { Anotations } from "../src/utils/Anotations";
import { LoginQuestions } from '../src/questions/LoginQuestions';

test.describe('@Feature: El usuario hace login en la pagina', async () => {
    
    let login;
    let loginQuestions;

    test.beforeEach(async ({ page }) => {
        login = new Login(page)
        loginQuestions = new LoginQuestions(page)
        await page.goto('/')
        await page.waitForTimeout(5000)
    })

    test.describe('Scenario: El usuario ingresa credenciales correctas', async () => {
        
        test('Scenario: Usuario ingresa a su cuenta', async () => {

            Anotations.given('El usuario navega a la pagina de login')
            await login.navegateToLoginPage()
            Anotations.and('El usuario ingresa su correo electronico y contrasena')
            await login.setDataForm('chapeon.100@hotmail.com', '1203jdsp')
            Anotations.when('El usuario hace login en la pagina')
            await login.clickLoginButton()
            Anotations.then('El sistema redirecciona a la pagina de inicio')
            await loginQuestions.userButonPresent()
            
        })
    
    })



})