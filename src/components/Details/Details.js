import React, { useState, useEffect } from "react"
import {  useLocation } from "react-router-dom"
import { getDataFromSrver } from "../../api";
import EntitiesCard from "../Entities/EntitiesCard";
import Spinner from "../Spinner/Spinner";


const Details = () => {
  const location = useLocation();
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const searchParams = new URLSearchParams(location.search);
  const quary = searchParams.get('query') || '';

  useEffect(() => {
    setLoading(true)
    getDataFromSrver(`${quary}?format=json`)
      .then(data => {
        setData(data);
        setLoading(false)
      })
  }, [quary])

  if (isLoading) {
    return <Spinner/>
  }

  return <EntitiesCard item={data} />
}

export default Details;
