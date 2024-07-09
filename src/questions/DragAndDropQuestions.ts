import { Page, expect } from "@playwright/test";
import { DragAnDrop } from "../ui/DragAndDrop";

export class DragAndDropQuestions {

    private page:Page;

    constructor(page:Page){
        this.page = page;
    }

    async dragIsPresentOnDrop(){
        const drag = this.page.locator(DragAnDrop.iframe).contentFrame().locator(DragAnDrop.dragOnDrop);
        await expect(drag).toBeVisible();
        const drag2 = this.page.locator(DragAnDrop.iframe).contentFrame().locator(DragAnDrop.dragOnDropTwo);
        await expect(drag2).toBeVisible();
    }
}