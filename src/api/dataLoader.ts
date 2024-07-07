import { ICharacter } from "../types/types";

class LoadData {
  API_URL = "https://rickandmortyapi.com/api/character";

  getData(searchTerm = ""): Promise<ICharacter[]> {
    return searchTerm ? this.getDataBySearch(searchTerm) : this.getAllData();
  }

  private getDataBySearch(searchTerm: string): Promise<ICharacter[]> {
    return fetch(`${this.API_URL}/?search=${searchTerm}`)
      .then((response) => (response.status === 200 ? response.json() : null))
      .then((data) => (data?.results ? data.results : []));
  }

  async getAllData(): Promise<ICharacter[]> {
    let allCharacters: ICharacter[] = [];

    const response = await fetch(this.API_URL);
    const data = await response.json();

    if (data && data.results) {
      allCharacters = [...allCharacters, ...data.results];
    }

    return allCharacters;
  }
}

export default LoadData;
