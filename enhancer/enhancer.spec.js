const { repair } = require('./enhancer.js');

// some items to test
const brokenWeapon = {
  name: "brokenWeapon",
  type: "weapon",   // weapon or armor
  durability: 90,   // 0 - 100, start = 100
  enhancement: 0,   // 0 - 20, start = 0
}
const brokenArmor = {
  name: "brokenArmor",
  type: "weapon",   // weapon or armor
  durability: 80,   // 0 - 100, start = 100
  enhancement: 20,   // 0 - 20, start = 0
}

describe('enhancer.js', () => {
  describe('repair()', () => {
    it('should restore durability to 100 for any item', () => {
      expect(repair(brokenWeapon).durability).toBe(100);
      expect(repair(brokenArmor).durability).toBe(100);
    })
  });
});