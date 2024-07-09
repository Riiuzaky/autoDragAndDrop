import { Page, expect } from "@playwright/test";
import { HomePage } from "../ui/HomePage";

export class LoginQuestions {
    
    private page:Page;

    constructor(page:Page){
        this.page = page;  
    }

    async userButonPresent(){

        const userButon = this.page.locator(HomePage.usuarioButon);
        if(await userButon.isVisible()){
            await expect(userButon).toHaveText('Acceso al Área de Usuario');
        }
    }

}
