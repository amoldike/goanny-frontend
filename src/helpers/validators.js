const validators = (value, type, pass = 0) => {
  switch (type) {
    case "string":
      if (value && !/[^a-zA-Z]/.test(value)) {
        return true;
      }
      return false;

    case "email":
      return String(value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

    case "mobile":
      return value.match(/^\d{10}$/);

    case "password":
      return String(value).length > 6;

    case "confirmPassword":
      return String(value).length > 6 && value === pass;

    default:
  }
};

export default validators;
