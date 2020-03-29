import Api from './api'

class courses_services extends Api {
    constructor(){
        super("/course")
    }
    save(courses){
        return this.post("/", courses);
    }

    getAll(){
        return this.get("/");
    }

}

export default courses_services;