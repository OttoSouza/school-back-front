import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080"
});

class Api {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  post(url, object) {
    const request = `${this.apiUrl}${url}`;
    return api.post(request, object);
  }

  get(url){
    const request = `${this.apiUrl}${url}`;
    return api.get(request)
  }
  
}

export default Api;
