const isNameValid = (req, res, next) => {
  const { name } = req.body;
  if (name) next();
  else
    res.status(422).json({ sucess: false, payload: "Must include name field" });
};

module.exports = isNameValid;
