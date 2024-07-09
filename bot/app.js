const axios = require("axios");
const httpRequest = async () => {
  try {
    const httpData = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(httpData.data);
  } catch (error) {
    console.log(error);
  }
};



(async() => {
 await httpRequest()
})()