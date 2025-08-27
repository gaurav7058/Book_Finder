// API service layer (clean separation)
const BASE_URL = "https://openlibrary.org/search.json?q=";

export const fetchBooks = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}${query}`);
    const data = await response.json();
    return data.docs || [];
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};
