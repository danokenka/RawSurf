export interface PhotographerObject {

    photographerObj: Object

}

export interface PhotographersArray {
    Company: string;
    id: string;
    Image: string;
    Price: number;
    Region: string;
    email: string;
    name: string;
    phone: string;
    username: string;
    website: string;

}

export interface PhotographerObj {
    id: number,
    name: string,
    Company: string,
    Price: number,
    Image: string,
    RegionCode: string,
    Region: string,
    email: string,
    phone: string,
    username: string,
    website: string

}

export interface Payer {
  
        email_address: string,
        payer_id: string,
        name: {
          given_name: string,
          surname: string
        }
        
 

}