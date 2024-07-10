import { ICharacter } from "../types/types";

const API_URL = "https://rickandmortyapi.com/api/character";

const getDataBySearch = (
  searchWord: string,
  page = 1,
): Promise<ICharacter[]> => {
  return fetch(`${API_URL}/?page=${page}&search=${searchWord}`)
    .then((response) => (response.status === 200 ? response.json() : null))
    .then((data) => (data?.results ? data.results : []));
};

const getAllItems = async (): Promise<ICharacter[]> => {
  let allItems: ICharacter[] = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const response = await fetch(`${API_URL}/?page=${page}`);
    const data = await response.json();

    if (data && data.results) {
      allItems = [...allItems, ...data.results];
      totalPages = 5;
    }
    page++;
  }
  return allItems;
};

export const getData = (searchWord = "", page = 1): Promise<ICharacter[]> => {
  return searchWord ? getDataBySearch(searchWord, page) : getAllItems();
};
