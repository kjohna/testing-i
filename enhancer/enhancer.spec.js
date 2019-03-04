const { repair, success, fail } = require('./enhancer.js');

// *** some items to test
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

// for repair method
const repairWeapon = {
  ...weapon,
  durability: 90,
}
const repairArmor = {
  ...armor,
  durability: 80,
}

// for success method
const successWeaponBelow20 = {
  ...weapon,
  enhancement: 0,
}
const successWeaponAt20 = {
  ...weapon,
  enhancement: 20,
}
const successArmorBelow20 = {
  ...armor,
  enhancement: 0,
}
const successArmorAt20 = {
  ...armor,
  enhancement: 20,
}

// for fail method
const failWeaponE0D10 = {
  ...weapon,
  enhancement: 0,
  durability: 10,
}
const failWeaponE0D5 = {
  ...weapon,
  enhancement: 0,
  durability: 5,
}
const failWeaponE0D3 = {
  ...weapon,
  enhancement: 0,
  durability: 3,
}
const failWeaponE15D20 = {
  ...weapon,
  enhancement: 15,
  durability: 20,
}
const failWeaponE15D10 = {
  ...weapon,
  enhancement: 15,
  durability: 10,
}
const failWeaponE15D3 = {
  ...weapon,
  enhancement: 15,
  durability: 3,
}
const failWeaponE17D20 = {
  ...weapon,
  enhancement: 17,
  durability: 20,
}
const failWeaponE16D20 = {
  ...weapon,
  enhancement: 16,
  durability: 20,
}

// *** end test items

describe('enhancer.js', () => {
  describe('repair()', () => {
    it('should restore durability to 100 for any item', () => {
      expect(repair(repairWeapon).durability).toBe(100);
      expect(repair(repairArmor).durability).toBe(100);
    });
  });

  describe('success()', () => {
    it('should increase enhancement by 1', () => {
      expect(success(successWeaponBelow20).enhancement).toBe(1);
      expect(success(successArmorBelow20).enhancement).toBe(1);
    });
    it('should not increase enhancement beyond 20', () => {
      expect(success(successWeaponAt20).enhancement).toBe(20);
      expect(success(successArmorAt20).enhancement).toBe(20);
    });
    // todo test updated name
  });

  describe('fail()', () => {
    it('should reduce durability by 5 if enhancement is between 0 and 14', () => {
        expect(fail(failWeaponE0D10).durability).toBe(5);
        expect(fail(failWeaponE0D5).durability).toBe(0);
        // make sure it doesn't go negative
        expect(fail(failWeaponE0D3).durability).toBe(0);
    });
    it('should reduce durability by 10 if enhancement is greater than 14', () => {
      expect(fail(failWeaponE15D20).durability).toBe(10);
      expect(fail(failWeaponE15D10).durability).toBe(0);
      // make sure it doesn't go negative
      expect(fail(failWeaponE15D3).durability).toBe(0);
    });
    it('should reduce enhancement by 1 if enhancement is greater than 16', () => {
      expect(fail(failWeaponE17D20).enhancement).toBe(16);
      expect(fail(failWeaponE16D20).enhancement).toBe(16);
    });
    // todo test updated name
  })
});