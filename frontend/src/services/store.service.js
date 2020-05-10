import http from "../http-common";

class StoreDataService {
    getStore(){
        return http.get("/store");
    }

    get(id){
        return http.get(`/store/${id}`);
    }

    create(data){
        return http.post("/store", data);
    }

    update(id, data){
        return http.put(`/store/${id}`, data)
    }

    delete(id){
        return http.delete(`/store/${id}`);
    }

    deleteAll(){
        return http.delete(`/store`);
    }

    findByMenuName(name){
        return http.get(`/store/?name=${name}`)
    }
}

export default new StoreDataService();