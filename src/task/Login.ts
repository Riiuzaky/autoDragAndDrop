import { Page } from "@playwright/test";
import { LoginPage } from "../ui/LoginPage";
import { HomePage } from "../ui/HomePage";

export class Login {

    private page:Page;

    constructor(page:Page){
        this.page = page;
    }

    async setDataForm(email:string, password:string){
        await this.page.fill(LoginPage.loginEmailInput, email);
        await this.page.fill(LoginPage.passwordInput, password);
        
    }

    async navegateToLoginPage(){
        await this.page.click(HomePage.accederButon);
    }

    async clickLoginButton(){
        await this.page.click(LoginPage.loginButton);
    }

}