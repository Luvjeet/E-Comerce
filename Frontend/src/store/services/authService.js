import axios from "axios";

const LOGIN_USER = "api/token/";

const loginUser = async (data) => {
  const resp = await axios.post(
    `${import.meta.env.VITE_BASE_URL}${LOGIN_USER}`,
    data
  );
  console.log(resp);
};

const authServices = {
  loginUser,
};

export default authServices;
