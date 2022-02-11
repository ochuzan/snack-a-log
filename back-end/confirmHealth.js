const confirmHealth = (snack) => {
  const { protein, fiber, added_sugar } = snack;
  if (isNaN(protein) || isNaN(fiber) || isNaN(added_sugar)) {
    return null;
  }
  if ((protein >= 5 || fiber >= 5) && added_sugar < 5) {
    return true;
  }
  return false;
};

module.exports = confirmHealth;
