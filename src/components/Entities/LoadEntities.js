import React, { useState, useEffect, useContext } from "react"
import EntitiList from "../../components/Entities/EntitiList";
import { getDataFromServerByPath, getFilterByPath } from "../../api";
import { ContextSearch } from "../../page/RootRouter";
import { useLocation } from "react-router-dom";
import Spinner from "../Spinner/Spinner";


const LoadEntities = ({ location: { pathname } }) => {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false)



  const location = useLocation();
  const search = useContext(ContextSearch)
  // let sort = useContext(ContextSort)
  // const isSortedAsc = searchParams.get('sortOrder') !== 'desc';
  const searchParams = new URLSearchParams(location.search);
  

  useEffect(() => {
    setLoading(true)
    const promis = search.length > 0 ? getFilterByPath(pathname)(search) : getDataFromServerByPath(pathname);

    promis.then(response => {
      setData(response.results)
      setLoading(false)
    });

  }, [pathname, search])


  if (isLoading) {
    return <Spinner/>
  }

  return (
    <>
      <EntitiList data={data} />
    </>
  )
}

export default LoadEntities;
