import { pathMap, getGeneralUrlByPath } from "./utils/pathMap"
import {URL} from "./conts/url"

export const getDataFromSrver = async (url) => {
  return await fetch(url)
    .then(response => response.json())
}

export const getFilterByPath = (path) => {
  return pathMap[path].filter;
};

export const getDataFromServerByPath = (path) => {
  return getDataFromSrver(URL + getGeneralUrlByPath(path));
};