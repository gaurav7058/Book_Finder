import SearchBar from "../Components/SearchBar";
import BookList from "../Components/BookList";
import Loader from "../Components/Loader";
import { useBooks } from "../Hooks/useBooks";

const Home = () => {
  const { books, loading, searchBooks } = useBooks();

  return (
    <div>
      <h1 className="text-2xl font-bold text-center p-4">📚 Book Finder</h1>
      <SearchBar onSearch={searchBooks} />
      {loading ? <Loader /> : <BookList books={books} />}
    </div>
  );
};

export default Home;
