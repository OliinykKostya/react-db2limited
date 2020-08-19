import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Details from '../components/Details/Details';
import PageNotFound from './404';
import Search from '../components/Search/Search';
import LoadEntities from '../components/Entities/LoadEntities';
import Button from '../components/Button/Button';

export const ContextSearch = React.createContext()
export const ContextSort = React.createContext()

export const RootRouter = ({ match: { path }, location: { pathname } }) => {

    const [searchData, setSearchData] = useState([])
    // const [sortedData, setsortedData] = useState([])

    const onSearch = (value) => {
        setSearchData(value)
    }

    // const onSorted = (sortPath) => {
    //     setsortedData(sortPath)
    // }

    return (
        <ContextSearch.Provider value={searchData} >
                <Search pathname={pathname} onSearch={onSearch} />
                {/* <Button pathname={pathname} onSorted={onSorted} /> */}
                <Switch>
                    <Route path="/:tab" exact component={LoadEntities} />
                    <Route path="/:tab/:details?" exact component={Details} />
                    <Redirect from="/" to="/films" />
                    <Route exact path="/404" component={PageNotFound} />
                    <Redirect from="*" to="/404" />
                </Switch>
        </ContextSearch.Provider>
    )
};

RootRouter.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

RootRouter.defaultProps = {};

RootRouter.displayName = 'Router';
