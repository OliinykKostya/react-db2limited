import React, { useState } from "react"

let intervalId;

const Input = () => {

  const [filteredPeople, setFilteredPeople] = useState([]);

  const getFilteredList = search => () => {
    console.log(search)
    fetch(`https://swapi.dev/api/people/?search=${search}`).then(response =>
      response.json().then(({ results }) => {
        console.log("results =", results);

        setFilteredPeople(results);
      })
    );
  };

  const changeInput = e => {
    clearInterval(intervalId);
    intervalId = setTimeout(getFilteredList(e.target.value), 1000);
  };

  return (
    <input type="test" onChange={changeInput}></input>
  )
}

export default Input