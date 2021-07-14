export class User {
    constructor(
        public id: string, 
        public email: string, 
        private _token: string, 
        private tokenExpirationDate: Date
        ) {}

        get token() {
            if (!this.tokenExpirationDate || this.tokenExpirationDate <= new Date()) {
                return null;
            }
            return this._token;
        }

        get tokenDuration() {
            if (!this.token) {
                return 0;
            } 
            // uncomment to test if logged out after 2 seconds
                //return 2000;
                
            return this.tokenExpirationDate.getTime() - new Date().getTime();
        }
}

export class UserProfile {
    constructor(
        public id: string, 
        public email: string, 
        public displayName: string,
        private photoUrl: string
        
        ) {}

        // get token() {
        //     if (!this.tokenExpirationDate || this.tokenExpirationDate <= new Date()) {
        //         return null;
        //     }
        //     return this._token;
        // }

        // get tokenDuration() {
        //     if (!this.token) {
        //         return 0;
        //     } 
        //     // uncomment to test if logged out after 2 seconds
        //         //return 2000;
                
        //     return this.tokenExpirationDate.getTime() - new Date().getTime();
        // }
}