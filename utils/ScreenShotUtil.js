import path from 'path';

//path= Brings Node.js path handling capability.

//It helps manage file locations.

export default class ScreenShotUtil {
    static async takeScreenshot(page, fileName) {
        await page.screenshot({

            path: `screenshots/${fileName}.png`,
            fullPage: true
        });
    }

};



