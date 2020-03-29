import Api from './api'

class team_services extends Api {
    constructor(){
        super("/classes")
    }
    save(team){
        return this.post("/", team);
    }

    getAll(){
        return this.get("/");
    }

}

export default team_services;