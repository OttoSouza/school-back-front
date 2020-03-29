import Api from './api'

class enroll_services extends Api {
    constructor(){
        super("/registration")
    }

    save(registration){
        return this.post("/", registration);
    }
}

export default enroll_services;