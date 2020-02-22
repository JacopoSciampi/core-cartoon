export interface GenericError {
    error: {
        error: string;
        errorCode: string;
        timestamp: number;
        fullDate: Date;
    }
}