export const authReducer = (state, action) => {
  switch (action.type) {
    case 'auth/loginForm':
      return { ...state, loginForm: action.payload };

    case 'register/email':
      return { ...state, registerEmail: action.payload };

    case 'register/password':
      return { ...state, registerPassword: action.payload };

    case 'login/email':
      return { ...state, loginEmail: action.payload };

    case 'login/password':
      return { ...state, loginPassword: action.payload };

    case 'auth/errorMessage':
      return { ...state, errorMessage: action.payload };

    default:
      break;
  }
};
