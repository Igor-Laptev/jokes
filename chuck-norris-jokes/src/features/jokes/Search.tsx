import React, { useEffect, useRef, useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

export const Search = ({ onSearch }: Props): JSX.Element => {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (input.length > 3) {
      onSearch(input);
    }
  }, [input, onSearch]);

  return (
    <input
      className="search-input"
      ref={inputRef}
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Search jokes... "
    />
  );
};
