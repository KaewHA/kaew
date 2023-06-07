class hotel {

    constructor(numOfRoom){
        this.numOfRoom=numOfRoom
        this.rooms=[]
    }
    // rooms=[{roomId:roomId, available:Boolean}]
    reservation(roomId){
        if (roomId != roomId) {return -1} 
        if (this.rooms.find(roomId => roomId.available === false)) {
            return "ininvalid"
        }
        this.rooms[roomId].available = !this.rooms[roomId].available
        return this.rooms
    }

    cancelReservation(roomId){
        if (roomId != roomId) {return -1} 
        if (this.rooms.find(roomId => roomId.available === true)) {
            return "ininvalid"
        }
        this.rooms[roomId].available = !this.rooms[roomId].available
    }

    getRoomAvailable(){
        this.rooms.every(rooms => rooms.available === true)
        return this.rooms
    }




}

