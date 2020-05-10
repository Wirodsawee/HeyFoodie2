import http from "../http-common";

class MenuDataService {
    getAll(){
        return http.get("/menu");
    }

    get(id){
        return http.get(`/menu/${id}`);
    }

    create(data){
        return http.post("/menu", data);
    }

    update(id, data){
        return http.put(`/menu/${id}`, data)
    }

    delete(id){
        return http.delete(`/menu/${id}`);
    }

    deleteAll(){
        return http.delete(`/menu`);
    }

    findByMenuName(name){
        return http.get(`/menu/?name=${name}`)
    }
}

export default new MenuDataService();