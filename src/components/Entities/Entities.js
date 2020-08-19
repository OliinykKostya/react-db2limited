import React, { useEffect, useState } from "react"
import { getDataFromSrver } from "../../api"
import { useHistory} from "react-router-dom"
import Spinner from "../Spinner/Spinner"

const Character = ({ item, type} ) => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const history = useHistory();

  useEffect(() => {
    setLoading(true)
    getDataFromSrver(item && item.replace("http", "https"))
      .then(data => setData(data))
      setLoading(false)
  }, [])

  if (isLoading) {
    return <Spinner/>
  }

  if (type === undefined) {
    return "No Entities "
  }

  return (
    <>
      <li className="list-group-item" onClick={()=> {
        history.push({
          pathname: `/${type}/details`,
          search: `query=${encodeURIComponent(data.url.replace("http", "https"))}`,
        })
      }}>{ data[type === "films" ? "title" : "name"]
      }</li>
    </>
  )
}

export default Character;
