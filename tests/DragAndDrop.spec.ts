import { test } from '@playwright/test';
import { Anotations } from '../src/utils/Anotations';
import { DragAndDrop } from '../src/task/DragAndDrop';
import { DragAndDropQuestions } from '../src/questions/DragAndDropQuestions';

test.describe('@Feature: El usuario hace drag and drop en la pagina', async () => {
    
    let dragAndDrop;
    let dragAndDropQuestions;

    test.beforeEach(async ({ page }) => {
        dragAndDrop = new DragAndDrop(page)
        dragAndDropQuestions = new DragAndDropQuestions(page)
        await page.goto('https://www.globalsqa.com/demo-site/draganddrop/')
        await page.waitForTimeout(3000)
    })

    test.describe('Scenario: El usuario hace drag and drop en la pagina', async () => {

        test('Scenario: El usuario hace drag and drop en la pagina', async () => {
            Anotations.when('El usuario navega a la pagina de drag and drop y mueve los objetos')
            dragAndDrop.mover()
            Anotations.then('El usuario puede ver los objetos arrastrados')
            await dragAndDropQuestions.dragIsPresentOnDrop()
        })
    })



})