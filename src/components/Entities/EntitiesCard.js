import React from "react"
import Entities from "./Entities";
import { useParams } from "react-router-dom";
import { getDetailFildsByPath } from "../../utils/pathMap";
import Spinner from "../Spinner/Spinner";

const CaracterCard = ({ item }) => {
  const params = useParams();

  let field = getDetailFildsByPath(`/${params.tab}`);

  return (
    <div>
      {field
        ? field.map(data => (
          <>
            {typeof data === "object"
              ? <>
                <br></br>
                {item[data] !== undefined && item[data].length !== 0 && <h1 className="p__alight-center">{data}</h1>}
                <ul className="list-group">
                  {typeof item[data] === "object" && item[data] != null
                    ? item[data].map(datainside => (
                      <Entities item={datainside} type={data[0]} />
                    ))
                    : <Entities item={item[data]} type={data[0]} />
                  }
                </ul>
              </>
              : <p className="p__alight-center"><b className="p__alight-center--span">{data}:</b> {item[data]}</p>
            }
          </>
        ))
        : <Spinner/>
      }
    </div>
  )
}

export default CaracterCard
