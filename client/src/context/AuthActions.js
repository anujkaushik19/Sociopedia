export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
  });
  
  export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
  });
  
  export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
  });
  
  export const Follow = (userId) => ({
    type: "FOLLOW",
    payload: userId,
  });
  
  export const Unfollow = (userId) => ({
    type: "UNFOLLOW",
    payload: userId,
  });
  export const SaveOtp = (otp) => ({
    type: "OTP",
    payload: otp,
  });
  export const VerifyOtp = (bool) => ({
    type: "VERIFY",
    payload: bool,
  });
  export const RequestCancel = (id) => ({
    type: "REMOVE REQUEST",
    payload: id,
  });
 
  
  
  