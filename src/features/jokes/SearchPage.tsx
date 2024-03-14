import { useState } from "react";
import { Search } from "./Search";
import { JokeCard } from "./JokeCard";

interface Joke {
  id: string;
  value: string;
  url: string;
  updated_at: string;
}

export const SearchPage = (): JSX.Element => {
  const [searchResults, setSearchResults] = useState<Joke[]>([]);

  const fetchJokes = async (searchQuery: string) => {
    if (searchQuery.length > 3) {
      try {
        const response = await fetch(
          `https://api.chucknorris.io/jokes/search?query=${searchQuery}`
        );
        const data = await response.json();
        setSearchResults(data.result);
      } catch (error) {
        console.error("Ошибка при загрузке шуток: ", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="search-page">
      <div className="search-container">
        <Search onSearch={fetchJokes} />
        {searchResults.length > 0 && (
          <div className="jokes-found">
            <p>Found jokes: {searchResults.length}</p>
          </div>
        )}
      </div>

      <div className="jokes-container">
        {searchResults.slice(0, 2).map((joke) => (
          <JokeCard joke={joke} size="large" key={joke.id} />
        ))}
        {searchResults.slice(2, 8).map((joke) => (
          <JokeCard joke={joke} size="small" key={joke.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
