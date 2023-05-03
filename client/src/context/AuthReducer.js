const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followers: [...state.user.followers, action.payload],
        },
      };
    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: state.user.followings.filter(
            (following) => following !== action.payload
          ),
          followers: state.user.followers.filter(
            (follower) => follower !== action.payload
          ),
        },
      };
    case "OTP": {
      console.log("inside");
      return {
        ...state,
        otp: action.payload,
      };
    }
    case "VERIFY": {
      return {
        ...state,
        verify: action.payload,
      };
    }
    case "REMOVE REQUEST": {
      console.log("triggered");
      console.log("id is", action.payload);
      console.log("state before update is", state.user);
      return {
        ...state,
        user: {
          ...state.user,
          requests: state.user.requests.filter(
            (request) => request.id !== action.payload
          ),
        },
      };
    }
   

    default:
      return state;
  }
};

export default AuthReducer;
