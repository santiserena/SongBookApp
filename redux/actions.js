export const getUserMail = (mail) => {
  
  return {
    type: "USER_EMAIL",
    payload: mail,
  };
}

export const updateNewSongs = () => {
  

  return {
    type: "UPDATE_NEW_SONGS",
    
  };
}