import axios from "axios";
const getIPAddress = async () => {
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('Error fetching IP address:', error);
      return "localhost";
    }
  };
  
  export default getIPAddress;