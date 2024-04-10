export class Bookingoutput {
    constructor(
        public bookId?:number,
        public customerEmailId?:string,
        public carModelName?:string,
        public slotNo?:number,
        public date?:Date,
        public bookingDate?:Date,
        public staffName?:string,
        public staffMobileNumber?:string,
        public status?:boolean
    ){}
}



