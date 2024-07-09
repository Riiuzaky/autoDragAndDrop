import { Page, expect } from "@playwright/test";
import { UploadPage } from "../ui/uploadpage";

export class UploadQuestions {

    private page:Page;

    constructor(page:Page){
        this.page = page;
    }

    async uploadIsPresent(){
        const upload = this.page.locator(UploadPage.uploadFileInput); 
        await expect(upload).toHaveValue('C:\\fakepath\\MetodologiaAuditoria.pdf');
    }
}   