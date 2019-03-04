module.exports = {
  repair,
}

function repair(item) {
  return {
    ...item,
    durability: 100
  }
}