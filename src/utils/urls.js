const idAuthor = 1;
export const GET_CREATE_CHARACTERS = `https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=${idAuthor}`;
export const GET_CHARACTERS_BY_TITLE = (title = '') => `https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=${idAuthor}&title=${title}`;
export const EDIT_DELETE_CHARACTER = (id) => `https://bp-marvel-api.herokuapp.com/${id}?idAuthor=${idAuthor}`;
