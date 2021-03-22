export class HTTPException extends Error {
    statusCode: number;
    message: string;

    constructor(statusCode: number, message: string) {
        super(message);

        this.statusCode = statusCode;
        this.message = message;
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    toJSON() {
        return {
            status_code: this.statusCode,
            message: this.message,
        };
    }
}

export class NotFoundException extends HTTPException {
    constructor(message: string) {
        super(404, message);
    }
}