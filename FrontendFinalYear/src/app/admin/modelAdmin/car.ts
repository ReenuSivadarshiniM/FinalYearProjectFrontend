export class Car {
[x: string]: any;
    constructor(
        public doctorId ?:number,
        public doctorName?:string,
        public doctorEmail?:string,
        public doctorFees?:number,
        public doctorPhoneNo?:string,
        public address?:string,
        public url?: string

    ){}
}
