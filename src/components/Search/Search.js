import React from "react";

let intervalId;

const Search = ({ onSearch }) => {

    const searchHandler = (value) => () => {
        onSearch(value)
    }

    const changeHandler = (e) => {
        clearInterval(intervalId);
        intervalId = setTimeout(searchHandler(e.target.value), 1000);
    };

    return (
        <>
            <input
                type="text"
                onChange={changeHandler}
                placeholder="Search Entities"
            />
        </>
    )
}

export default Search;
