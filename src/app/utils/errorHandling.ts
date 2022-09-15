export class ErrorHandler {


    constructor() {

    }

    static errorMessage(message: string) {

        if (message.toLowerCase().includes("jwt expired")) {
            alert("La session a expiré")
        }
        else {
            alert(message);
        }

    }

}