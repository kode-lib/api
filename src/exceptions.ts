export class HTTPException extends Error {
    statusCode: number;
    message: string;

    constructor(statusCode: number, message: string) {
        super(message);

        this.statusCode = statusCode;
        this.message = message;
    }
}

export class NotFoundException extends HTTPException {
    constructor(message: string) {
        super(404, message);
    }
}
