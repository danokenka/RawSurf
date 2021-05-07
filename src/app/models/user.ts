export interface User {
    email: string;
    password: string;
}

export interface UserProfile {
    name: string;
    email: string;
    photoUrl: string;
    emailVerified: boolean;
    uid: string;
}