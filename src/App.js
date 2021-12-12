import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import CharacterSehema from "./components/Characters/CharacterSehema";
import Header from "./components/Ui/Header";
import Search from "./components/Ui/Search";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";


const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearch] = useState("");
  const [isBackgroundRed, setisBackgroundRed] = useState(true);
  const [buttontext, setButtonText] = useState("Black");
  const [visible, setVisible] = useState(4);
  const [errorMessage, seterrorMessage] = useState(null);
  const [user , setUser] = useState(false);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(
          `https://www.breakingbadapi.com/api/characters?name=${searchText}`
        );
        setItems(response.data);
        setLoading(false);
        seterrorMessage(null);
      } catch (error) {
        console.error(error);
        seterrorMessage(error.mesage);
      }
    };

    fetchData();
  }, [searchText]);

  const bodyColorChange = () => {
    if (isBackgroundRed) {
      setisBackgroundRed(false);
      setButtonText("White");
    } else {
      setisBackgroundRed(true);
      setButtonText("Black");
    }
  };

  const loadMore = () => {
    setVisible(visible + 4);
  };

  const handleDelete = (id) => {
    const newItem = items.filter((item) => item.char_id !== id);
    setItems(newItem);
  };

  // let history = useNavigate();
  const navigate = useNavigate();

  const onClickHandler = () =>{
    // history.push("/a");
    if(!user){
      navigate('/home');
    }
    
  }
  // console.log(history);

  return (
    <div className={isBackgroundRed ? "background-white" : "background-black"}>
      <div className="center">
        <button className="btn" onClick={bodyColorChange}>
          {buttontext}
        </button>
      </div>
      <Header />
      <Search
        getSearch={(parametr) => {
          setSearch(parametr);
        }}
      />
      {/* <Search getSearch={setSearch} /> */}
      {items && (
        <CharacterSehema
          items={items}
          isLoading={loading}
          loadMore={visible}
          handleDelete={handleDelete}
        />
      )}
      <div className="center">
        {visible < items.length && (
          <button className="btn" onClick={loadMore}>
            Loadmore
          </button>
        )}
      </div>
      {errorMessage}

      <button onClick={onClickHandler}>history</button>
    </div>
  );
};

export default App;
