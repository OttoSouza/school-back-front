import Api from './api';

class student_services extends Api {
    constructor(){
        super("/students");
    }

    save(student){
        return this.post("/", student);
    }

    getAll(){
        return this.get("/");
    }
}

export default student_services;

