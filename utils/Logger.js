export default class Logger {
    static info(message) {
        console.log(`INFO: ${message}`);

        //Print a normal information message.
    }
    static warn(message) {
        console.warn(`WARN: ${message}`);
    }
    static error(message) {
        console.error(`ERROR: ${message}`);
    }   
    static debug(message) {
        console.debug(`DEBUG: ${message}`);
    }   
    static success(message) {
        console.log(`SUCCESS: ${message}`);
    }   

    //You can use this way - Exmaple : Logger.info("Opening Login Page");
}