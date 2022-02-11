const isImageValid = (str) => {
  return (
    str.substring(0, 7) === "http://" || str.substring(0, 8) === "https://"
  );
};

module.exports = isImageValid;
