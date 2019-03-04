module.exports = {
  repair,
  success,
  fail,
}

function repair(item) {
  return {
    ...item,
    durability: 100
  }
}

function success(item) {
  let enhancementFinal = item.enhancement;
  if (enhancementFinal < 20) {
    enhancementFinal ++;
  }
  return {
    ...item,
    enhancement: enhancementFinal
  }
}

function fail(item) {
  let durabilityFinal = item.durability;
  let enhancementFinal = item.enhancement;

  if (item.enhancement > 14) {
    durabilityFinal -= 10;
  } else {
    durabilityFinal -= 5;
  }

  if (item.enhancement > 16) {
    enhancementFinal --;
  }

  // no negative durability
  durabilityFinal = durabilityFinal < 0 ? 0 : durabilityFinal;
  return {
    ...item,
    durability: durabilityFinal,
    enhancement: enhancementFinal
  }
}