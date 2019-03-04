module.exports = {
  repair,
  success,
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