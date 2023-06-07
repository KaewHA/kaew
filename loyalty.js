class LoyaltyPoint {
    constructor(memberId) {
      this.memberId = memberId;
      this.points = 0;
      this.memberType = this.calculateMembershipLevel();
    }
  
    calculatePoints(purchaseAmount) {
      const earnedPoints = Math.floor(purchaseAmount / 25);
      this.points += earnedPoints;
      return this.points;
    }
  
    redeem(redeemPoints) {
      if (redeemPoints < 800 || redeemPoints > this.points) {
        return -1;
      }
      
      const cashCoupons = Math.floor(redeemPoints / 800);
      const remainingPoints = redeemPoints - cashCoupons * 800;
      
      this.points -= redeemPoints;
      
      return {
        memberId: this.memberId,
        cashCoupons: cashCoupons,
        redeemPoints: redeemPoints,
        currentPoints: this.points
      };
    }
  
    calculateMembershipLevel() {
      if (this.points < 10000) {
        return "SILVER";
      } else if (this.points >= 10000 && this.points <= 20000) {
        return "GOLD";
      } else {
        return "PLATINUM";
      }
    }
  }