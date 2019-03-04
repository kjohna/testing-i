const { repair, success } = require('./enhancer.js');

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
  });
});