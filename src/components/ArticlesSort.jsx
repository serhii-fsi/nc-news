import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import config from "../../config.json";
const {
    queryParams: { sortByParam, sortByOptions, orderParam, orderOptions },
} = config;

export default function ArticlesSort() {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortByQuery = searchParams.get(sortByParam);
    const orderQuery = searchParams.get(orderParam);

    const handleSortBy = (event) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set(sortByParam, event.target.value);
        setSearchParams(newParams);
    };
    const handleOrder = (event) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set(orderParam, event.target.value);
        setSearchParams(newParams);
    };

    return (
        <>
            <form className="articles-sort">
                <div>
                    <label htmlFor="sort_by">Sort by:</label>
                    <select
                        name="sort_by"
                        id="sort_by"
                        value={sortByOptions[sortByQuery] ? sortByQuery : "created_at"}
                        onChange={handleSortBy}
                    >
                        {Object.keys(sortByOptions).map((key) => {
                            return (
                                <option key={key} value={key}>
                                    {sortByOptions[key]}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="order">Order:</label>
                    <select
                        name="order"
                        id="order"
                        value={orderOptions[orderQuery] ? orderQuery : "asc"}
                        onChange={handleOrder}
                    >
                        {Object.keys(orderOptions).map((key) => {
                            return (
                                <option key={key} value={key}>
                                    {orderOptions[key]}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </form>
        </>
    );
}
