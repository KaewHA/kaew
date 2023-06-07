class Hotel {
    constructor(numOfRoom) {
      this.rooms = [];
      for (let i = 0; i < numOfRoom; i++) {
        const room = {
          roomld: i + 1,
          available: true
        };
        this.rooms.push(room);
      }
    }
  
    reservation(roomld) {
      for (const room of this.rooms) {
        if (room.roomld === roomld) {
          if (room.available) {
            room.available = false;
            return room;
          } else {
            return "invalid";
          }
        }
      }
      return -1;
    }
  
    cancelReservation(roomld) {
      for (const room of this.rooms) {
        if (room.roomld === roomld) {
          if (!room.available) {
            room.available = true;
            return room;
          } else {
            return "invalid";
          }
        }
      }
      return -1;
    }
  
    getRoomAvailable() {
      const availableRooms = [];
      for (const room of this.rooms) {
        if (room.available) {
          availableRooms.push(room);
        }
      }
      return availableRooms;
    }
  }