export interface UserSignUp {
    firstName: string;
    lastName: string;
    phone: string;   // بهتر است string باشد چون ممکن است با 0 شروع شود
    password: string;
    address: string;
    role?: string;
}
