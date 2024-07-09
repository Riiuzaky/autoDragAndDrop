import { Page } from "@playwright/test";
import { DragAnDrop } from '../ui/DragAndDrop';

export class DragAndDrop {

    private page:Page;

    constructor(page:Page){ 
        this.page = page;
    }

    async mover(){
        let drop = await this.page.frameLocator('.demo-frame >> nth=0').locator('#trash')
        let drag = await this.page.frameLocator('.demo-frame >> nth=0').getByText('High Tatras View larger')
        await drag.dragTo(drop);
        let iframe = await this.page.locator(DragAnDrop.iframe).contentFrame()
        let drag2 = await iframe.locator(DragAnDrop.dragtwo)
        await drag2.dragTo(drop);
    }
    
    
}