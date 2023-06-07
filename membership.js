class Membership {
    static autoId = 1;
  
    constructor() {
      this.members = [];
    }
  
    findMemberId(id) {
      for (let i = 0; i < this.members.length; i++) {
        if (this.members[i].memberId === id) {
          return i;
        }
      }
      return -1;
    }
  
    findMemberName(name) {
      const lowerCaseName = name.toLowerCase();
      for (let i = 0; i < this.members.length; i++) {
        if (this.members[i].memberName.toLowerCase() === lowerCaseName) {
          return i;
        }
      }
      return -1;
    }
  
    subscribe(name) {
      const existingIndex = this.findMemberName(name);
      if (existingIndex !== -1) {
        return -1; // Duplicate member name
      }
  
      const newMember = {
        memberId: Membership.autoId,
        memberName: name,
      };
      this.members.push(newMember);
      Membership.autoId++;
      return this.members.length;
    }
  
    unsubscribe(id) {
      if (id === undefined) {
        return -1;
      }
  
      const memberIndex = this.findMemberId(id);
      if (memberIndex !== -1) {
        this.members.splice(memberIndex, 1);
        return id;
      }
  
      return -1; // Member ID not found
    }
  }