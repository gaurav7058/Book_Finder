const BookCard = ({ book }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md">
      <h3 className="font-bold text-lg">{book.title}</h3>
      <p className="text-gray-600">Author: {book.author_name?.join(", ") || "Unknown"}</p>
      <p className="text-gray-500">First published: {book.first_publish_year || "N/A"}</p>
    </div>
  );
};

export default BookCard;
