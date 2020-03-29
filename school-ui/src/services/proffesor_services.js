import Api from "./api";

class proffessor_service extends Api {
  constructor() {
    super("/professor");
  }

  save(proffessor) {
    return this.post("/", proffessor);
  }

  getAll() {
    return this.get("/");
  }
}

export default proffessor_service;
