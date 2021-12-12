import React,{useState} from "react";

const Search = (props) => {
  const {getSearch} = props;
  const [text, setText] = useState("");

  const inputChangeHandler = (value) => {
    setText(value)
    getSearch(value)
  };
  return (
    <div>
      <form>
        <div className="wrap">
          <div className="search center">
            <input
              type="text"
              className="searchTerm"
              placeholder="What are you looking for?"
              value={text}
              autoFocus
              onChange={(e) => inputChangeHandler(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
