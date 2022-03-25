import axios from "axios";
import { EDIT_DELETE_CHARACTER, GET_CHARACTERS_BY_TITLE, GET_CREATE_CHARACTERS } from "../utils/urls";

export const getCharacter = (title) => {
    if(title) return axios.get(GET_CHARACTERS_BY_TITLE(title));
    return axios.get(GET_CREATE_CHARACTERS);
}

export const createCharacter = (body) => {
    return axios.post(GET_CREATE_CHARACTERS, body);
}

export const updateCharacter = (id, body) => {
    return axios.put(EDIT_DELETE_CHARACTER(id), body);
}

export const deleteCharacter = (id) => {
    return axios.delete(EDIT_DELETE_CHARACTER(id));
}