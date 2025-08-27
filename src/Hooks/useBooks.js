import { useState } from "react";
import { fetchBooks } from "../Api/bookService";

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async (query) => {
    setLoading(true);
    const results = await fetchBooks(query);
    setBooks(results);
    setLoading(false);
  };

  return { books, loading, searchBooks };
};
