const isNameValid = (req, res, next) => {
  const { name } = req.body;
  if (name) next();
  else
    res.status(422).json({ sucess: false, payload: "Must include name field" });
};
const capitalizedFirstLetters = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((el) => (el.length > 2 ? el[0].toUpperCase() + el.slice(1) : el))
    .join(" ");
};
module.exports = { isNameValid, capitalizedFirstLetters };
