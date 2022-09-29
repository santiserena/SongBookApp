export const getUserMail = (mail) => {
  return {
    type: "USER_EMAIL",
    payload: mail,
  };
};
