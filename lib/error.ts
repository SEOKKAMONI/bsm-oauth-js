import ErrorType from "./types/errorType";

export default class BsmOauthError extends Error {
    constructor(
        type: ErrorType,
        message?: string
    ) {
        super(message)
        this.name = 'BsmOauthError';
        this.type = type;
    };

    type: ErrorType;
}