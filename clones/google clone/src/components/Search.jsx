import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { useNavigate } from "react-router-dom";
import { useStateValue} from "../StateProvider"
import { actionTypes} from "../reducer"

function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();

    console.log("lele >> ", input);

    navigate("/search");
    
    dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input
    })
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <button type="submit" onClick={search}>
            Google Search
          </button>
          <button>I'm Feeling Lucky</button>
        </div>
      ) : (
        <div className="search__buttons">
          <button className="search__buttonsHidden" type="submit" onClick={search}>
            Google Search
          </button>
          <button className="search__buttonsHidden">I'm Feeling Lucky</button>
        </div>
      )}
    </form>
  );
}

export default Search;
