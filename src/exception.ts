export class HTTPException extends Error {
    statusCode: number;
    message: string;

    constructor(statusCode: number, message: string) {
        super(message);

        this.statusCode = statusCode;
        this.message = message;
    }

    toJSON() {
        return {
            status_code: this.statusCode,
            message: this.message,
        };
    }
}

export class HTTPNotFoundException extends HTTPException {
    constructor(message: string) {
        super(404, message);
    }
}