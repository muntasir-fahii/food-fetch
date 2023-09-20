const Bookmark = ({ bookmark, deleteHandler }) => {
  return (
    <div className="bookmark">
      {bookmark.map((item) => (
        <div key={item.idMeal} className="bookmark-item">
          <div>
            <h2>{item.strMeal}</h2>
            <p>{item.strCategory}</p>
          </div>
          <div>
            <button onClick={() => deleteHandler(item)} className="delete">
              {" "}
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bookmark;
