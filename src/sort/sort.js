export const handleSort = (data, sort, sortedData, ) => {
  const isSortedAsc = searchParams.get('sortOrder') !== "desc";

  let sortedPeople = [];
  let peopleCache = [];


  if (isSortedAsc) {
 
    searchParams.set('sortBy', sort);
    searchParams.set('sortOrder', 'desc');
  } else {
 
    searchParams.set('sortBy', sort);
    searchParams.set('sortOrder', 'ask');
  }


  history.push({ search: searchParams.toString() });

  if (sortedData.length === 0) {
    peopleCache = [...data];
  } else {
    peopleCache = [...sortedData];
  }


  if (sortedData !== false) {
    sortedPeople = [...peopleCache]
      .sort((a, b) => a[sort][0].localeCompare(b[sort][0])
      );

  } else {

    sortedPeople = [...peopleCache].reverse();
  }

  return sortedPeople;
};
