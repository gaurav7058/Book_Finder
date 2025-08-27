import BookCard from "./BookCard";

const BookList = ({ books }) => {
  if (!books.length) {
    return <p className="p-4 text-gray-500">No books found. Try searching!</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;
