export class Booking {
    constructor(
        public customerEmailId?:string,
        public carModelName?:string,
        public slotNo?:number,
        public date?:Date,
        public bookingDate?:Date,
        public status?:boolean
    ){}
}
