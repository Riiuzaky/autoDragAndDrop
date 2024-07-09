import { test } from '@playwright/test';
import { Anotations } from '../src/utils/Anotations';
import { Upload } from '../src/task/upload';
import { UploadQuestions } from '../src/questions/uploadQuestions';


test.describe('@Feature: El usuario hace upload en la pagina', async () => {
    
    let upload;
    let uploadQuestions;
    

    test.beforeEach(async ({ page }) => {
        upload = new Upload(page)
        uploadQuestions = new UploadQuestions(page)
        await page.goto('https://ps.uci.edu/~franklin/doc/file_upload.html')
        await page.waitForTimeout(5000)
    })

    test.describe('Scenario: El usuario hace upload', async () => {  

        test('Scenario: El usuario carga un archivo', async () => {
            Anotations.when('El usuario navega a carga un archivo')
            await upload.uploadFile('MetodologiaAuditoria.pdf')
            Anotations.then('El usuario puede ver el archivo cargado')
            await uploadQuestions.uploadIsPresent()
        })

    })

})