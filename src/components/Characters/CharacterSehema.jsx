import React from "react";
import CharacterItem from "./CharacterItem";
import Loader from "../Ui/Loader";

const CharacterSehema = (props) => {
  const {handleDelete,items, isLoading, loadMore } = props;

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <div className="card-container">
        {items?.slice(0, loadMore).map((item) => (
          <CharacterItem characteritem={item} key={item.char_id} handleDelete={handleDelete}  />
        ))}
      </div>
    </div>
  );
};

export default CharacterSehema;
