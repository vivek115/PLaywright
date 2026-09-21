export default class RandomDataUtil {


    static gerRandomNumber(length=5){
        return Math.floor(Math.random() * Math.pow(10, length));
        //Math.Random() - Returns a random decimal number between 0 and 1
        //Math.floor - Removes the decimal Part of the number
    }

      static getRandomEmail() {

        return `test${Date.now()}@yopmail.com`;

        //Date.now- Date.now() gives the current timestamp.e1723456789123xample- 

    }


    static getRandomString(length = 8) {

        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        let result = "";

        for(let i = 0; i < length; i++) {

            result += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );

        }

        return result;

    }

};