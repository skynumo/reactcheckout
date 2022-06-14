import axios from 'axios';
// import  ApiServices  from  './_apiServices';
// const  Api  =  new  ApiServices();

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

class Api {

  getToken = () => {
    let userToken;
    try {
      const user = sessionStorage.getItem('loginUser');
      userToken = user && JSON.parse(user).AccessToken;
      return userToken.replace(/['"]+/g, ''); // Replace single or double quotes from string
    } catch (e) {
      console.log('user token not found.');
    }
  };

  getData = (endpoint, isToken) => {
    let authToken;
    if (isToken) {
      authToken = 'JWT '+ this.getToken();
      return axios.get(endpoint, {
        headers: {
          'Authorization': authToken,
        }
      })
    } else {
      return axios.get(endpoint);
    }
  }  

  postData = (endpoint, isToken, data) => {
    let authToken;
    if (isToken) {
      authToken = 'JWT '+ this.getToken();
      return axios.post(endpoint, data, {
        headers: {
          'Authorization': authToken,
        }
      })
    } else {
      return axios.post(endpoint, data);
    }
  }

  getDataById = (pk) => {
    return axios.get(pk);
  }

  putData = (endpoint, isToken, data) => {
    let authToken;
    if (isToken) {
      authToken = 'JWT '+ this.getToken();
      return axios.put(endpoint, data, {
        headers: {
          'Authorization': authToken,
        }
      })
    } else {
      return axios.put(endpoint, data);
    }
  }

  deleteData = (endpoint, isToken, data) => {
    let authToken;
    if (isToken) {
      authToken = 'JWT '+ this.getToken();
      return axios.delete(endpoint, data, {
        headers: {
          'Authorization': authToken,
        }
      })
    } else {
      return axios.delete(endpoint, data);
    }
  }
}
export default Api;