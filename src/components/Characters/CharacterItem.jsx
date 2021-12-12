import React from "react";

const CharacterItem = (props) => {
  const { characteritem, handleDelete } = props;
  return (
    <div className="card">
      <header className="card-header header-img">
        <img src={characteritem.img} alt="" />
        <p className="header-title">{characteritem.name}</p>
      </header>
      <div className="card-body">{characteritem.nickname}</div>
      <div className="card-footer">
        <button className="btn" onClick ={() => handleDelete(characteritem.char_id)}>Delete</button>
      </div>
    </div>
  );
};

export default CharacterItem;
