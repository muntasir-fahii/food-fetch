import { useEffect, useState } from "react";
import Bookmark from "./components/Bookmark";
import Card from "./components/Card";

function App() {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => setMeals(data?.meals));
  }, [search]);

  const bookmarkHandler = (meal) => {
    if (bookmark) {
      const isExistData = bookmark.find((data) => data.idMeal === meal.idMeal);
      if (isExistData) {
        alert("already exist");
      } else {
        setBookmark([...bookmark, meal]);
      }
    } else {
      setBookmark([meal]);
    }
  };

  const deleteHandler = (item) => {
    const updatedData = bookmark.filter((data) => data.idMeal !== item.idMeal);
    if (updatedData) {
      setBookmark(updatedData);
    }
  };

  return (
    <div className="app">
      <div className="input">
        <input
          type="text"
          value={search}
          placeholder="Search our menu here"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="content">
        <div className="left">
          {meals?.map((meal) => (
            <Card
              key={meal.idMeal}
              meal={meal}
              bookmarkHandler={bookmarkHandler}
            />
          ))}
        </div>

        <div className="right">
          <Bookmark bookmark={bookmark} deleteHandler={deleteHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
