import { Page } from "@playwright/test";
import { UploadPage } from "../ui/uploadpage";
import path from 'path';
import fs from 'fs';

export class Upload {
    private page:Page;

    constructor(page:Page){
        this.page = page;
    }

    async uploadFile(file:string){

        if(!fs.existsSync('C:/Users/Riiuzaky/Downloads/')){
            console.error(`El archivo no existe`);
            return;
        }
        
        const filePath = path.resolve('C:/Users/Riiuzaky/Downloads/', file);
        await this.page.click(UploadPage.uploadFileInput);
        await this.page.setInputFiles(UploadPage.uploadFileInput, filePath);
    }   
    

}