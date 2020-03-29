import Api from "./api";

class manager_service extends Api {
  constructor() {
    super("/manager");
  }

  save(manager){
      return this.post("/", manager);
  }

  get_all(){
      return this.get("/");
  }

  get_id(id){
    return this.get(`/${id}`);
  }

  authentication(manager){
    return this.post("/auth", manager);
  }

}

export default manager_service;
