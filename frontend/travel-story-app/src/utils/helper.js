import noSearch from "../assets/images/noSearch.webp"
import noFilter from "../assets/images/noFilter.webp"
import EmptyImg from "../assets/images/EmptyImg.jpg"


export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const getInitials = (name) => {
  if (!name) return "";
  const words = name.split(" ");
  let initials = "";
  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0];
  }
  return initials.toUpperCase();
};

export const getEmptyCardMessage = (filterType) => {
  switch (filterType) {
    case "search":
      return "Oops! No stories found matching your search.";

    case "date":
      return "No stories found in the given date range.";
    default:
      return "Start creating your first travel story. Click the add button to jot down yout thoughts and memories. Let's get Started!";
  }
};

export const getEmptyCardImg = (filterType) => {
  switch (filterType) {
    case "search":
      return noSearch;
    case "date":
      return noFilter;
    default:
      return EmptyImg;
  }
};
