export default class VideoUtil {


    static async recordVideo(page, fileName) {
        const video = page.video();

        if(video) {
            //If recording is available, save it.
            await video.saveAs({ path: `videos/${fileName}.webm` });
        }
    }
}