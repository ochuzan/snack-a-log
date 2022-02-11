const confirmHealth = (snack) => {
  const { protein, fiber, added_sugar, is_healthy } = snack;
  if (
    protein === undefined ||
    fiber === undefined ||
    added_sugar === undefined
  ) {
    snack = { ...snack, is_healthy: null };
  }
  if (protein >= 5 && fiber >= 5 && added_sugar < 5) {
    snack = { ...snack, is_healthy: true };
  } else snack = { ...snack, is_healthy: false };
};

module.exports = confirmHealth;
