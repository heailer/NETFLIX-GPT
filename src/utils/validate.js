export const validateData = (email, password) => {
  const validEmail =
    /^[\w.-]+@[A-Za-z\d-]+(\.[A-Za-z\d-]+)*\.[A-Za-z]{2,}$/.test(email);
  const validPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!validEmail) return "Invalid email please try again";
  if (!validPassword) return "Invalid password please try again";

  return null;
};
