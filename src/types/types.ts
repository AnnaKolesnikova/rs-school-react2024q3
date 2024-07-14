import { ReactNode } from "react";

export interface IProps {
  children?: ReactNode;
}

export interface IAppProps extends IProps {
  searchWord: string;
  updateSearchWord: (value: string) => void;
}

export interface IResponse {
  results: ICharacter[];
  pages: number;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
