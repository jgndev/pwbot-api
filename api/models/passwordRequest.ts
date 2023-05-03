export interface PasswordRequest {
    useUppercase: boolean;
    useLowercase: boolean;
    useNumbers: boolean;
    useSpecial: boolean;
    length: number;
}