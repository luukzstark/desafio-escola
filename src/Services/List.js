import axios from "./";

const list = async () => {
  const response = await axios.get("/series");

  return response;
};

export default list;
