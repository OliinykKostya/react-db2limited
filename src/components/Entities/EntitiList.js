import React  from "react"
import { useHistory, useLocation } from "react-router-dom";

const SpeciesList = ({ data }) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <ul class="list-group">
      {data && data.map(item => (
        <>
          <li class="list-group-item" onClick={() => {
            history.push({
              pathname: `${location.pathname}/details`,
              search: `query=${encodeURIComponent(item.url)}`,
              // search: `query=${item.url}`,
            });
          }}>{ item[location.pathname === "/films" ? "title": "name"]
            }</li>
        </>
      ))}
    </ul>
  )
}

export default SpeciesList
