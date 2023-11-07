import { jwtDecode } from 'jwt-decode'

const validateToken = (token) => {
  try {
    console.log(token)
    const decoded = jwtDecode(token);
    console.log(decoded);
    if (decoded.exp < Date.now() / 1000) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
};

export default validateToken;
