import { useState } from "react";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import SearchResults from "../components/SearchResults/SearchResults";
import Search from "../components/Search/Search";
import { Outlet } from "react-router-dom";

export default function Home() {
  const SEARCH_WORD = "SearchWord";
  const storedSearch = localStorage.getItem(SEARCH_WORD);
  const [searchWord, setSearchWord] = useState(
    storedSearch ? storedSearch : "",
  );

  const updateSearchWord = (value: string) => {
    const newValue = value.trim();

    if (searchWord !== newValue) {
      setSearchWord(newValue);
      localStorage.setItem(SEARCH_WORD, newValue);
    }
  };
  return (
    <ErrorBoundary>
      <Search searchWord={searchWord} updateSearchWord={updateSearchWord} />
      <SearchResults searchWord={searchWord} />
      <Outlet />
    </ErrorBoundary>
  );
}
