const validateEmpty = (value) => {
  let result = false;

  if (value == null || value.length === 0 || value === undefined) {
    result = true;
  }

  return result;
};

export default validateEmpty;
