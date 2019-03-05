const { repair, success, fail } = require('./enhancer.js');

// boilerplate items
const weapon = {
  name: "weapon",
  type: "weapon",
  durability: 100,  // 0 - 100, start = 100
  enhancement: 0,   // 0 - 20, start = 0
}
const armor = {
  name: "armor",
  type: "armor",
  durability: 100,  // 0 - 100, start = 100
  enhancement: 0,   // 0 - 20, start = 0
}

describe('enhancer.js', () => {
  describe('repair()', () => {
    it('should restore durability to 100 for any item', () => {
      const repairWeapon = {
        ...weapon,
        durability: 90,
      }
      expect(repair(repairWeapon).durability).toBe(100);
      const repairArmor = {
        ...armor,
        durability: 80,
      }
      expect(repair(repairArmor).durability).toBe(100);
    });
  });

  describe('success()', () => {
    it('should increase enhancement by 1, not beyond 20', () => {
      const successWeapon0 = {
        ...weapon,
        enhancement: 0,
      }
      expect(success(successWeapon0).enhancement).toBe(1);
      const successArmor0 = {
        ...armor,
        enhancement: 20,
      }
      expect(success(successArmor0).enhancement).toBe(20);
    });
    it('should not increase enhancement beyond 20', () => {
      const successWeaponAt20 = {
        ...weapon,
        enhancement: 20,
      }
      expect(success(successWeaponAt20).enhancement).toBe(20);
      const successArmorAt20 = {
        ...armor,
        enhancement: 20,
      }
      expect(success(successArmorAt20).enhancement).toBe(20);
    });
    // todo test updated name
  });

  describe('fail()', () => {
    it('should reduce durability by 5 if enhancement is between 0 and 14', () => {
      // durability high
      const failWeapon0 = {
        ...weapon,
        enhancement: 0,
        durability: 10,
      }
      expect(fail(failWeapon0).durability).toBe(5);
      // durability at 5
      const failWeapon1 = {
        ...weapon,
        enhancement: 0,
        durability: 5,
      }
      // durability low
      expect(fail(failWeapon1).durability).toBe(0);
      const failWeapon2 = {
        ...weapon,
        enhancement: 0,
        durability: 3,
      }
      expect(fail(failWeapon2).durability).toBe(0);
    });
    it('should reduce durability by 10 if enhancement is greater than 14', () => {
      // durability high
      const failWeapon0 = {
        ...weapon,
        enhancement: 15,
        durability: 20,
      }
      expect(fail(failWeapon0).durability).toBe(10);
      // durability at 10
      const failWeapon1 = {
        ...weapon,
        enhancement: 15,
        durability: 10,
      }
      expect(fail(failWeapon1).durability).toBe(0);
      // durability low
      const failWeapon2 = {
        ...weapon,
        enhancement: 15,
        durability: 3,
      }
      expect(fail(failWeapon2).durability).toBe(0);
    });
    it('should reduce enhancement by 1 if enhancement is greater than 16', () => {
      // enhancement greater than 16
      const failWeapon0 = {
        ...weapon,
        enhancement: 17,
        durability: 20,
      }
      expect(fail(failWeapon0).enhancement).toBe(16);
      // enhancement at 16
      const failWeapon1 = {
        ...weapon,
        enhancement: 16,
        durability: 20,
      }
      expect(fail(failWeapon1).enhancement).toBe(16);
      // enhancement below 16
      const failWeapon2 = {
        ...weapon,
        enhancement: 15,
        durability: 20,
      }
      expect(fail(failWeapon2).enhancement).toBe(15);
    });
    // todo test updated name
  })
});