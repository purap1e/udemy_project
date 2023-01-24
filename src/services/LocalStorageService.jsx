import React,{Component} from "react";

export const ACCESS_TOKEN_KEY = "access_token";
export const REFRESH_TOKEN_KEY = "refresh_token";

class LocalStorageService {

    static save(key,value) {
        localStorage.setItem(key,value);
    }
    static get(key){
        return localStorage.getItem(key);
    }
    static clear(key){
        localStorage.removeItem(key);
    }
    static clearAll(){
        localStorage.clear();
    }
}
export default LocalStorageService;