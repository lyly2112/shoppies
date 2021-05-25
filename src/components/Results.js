import React from "react";
import Result from "./Result";
import "../css/results.css";

function Results({movies}) {
    return (
        <>
        <div>
        {
            movies && movies.map(movie => {
                // {console.log("value.Title =>>>", movie.Title);}
                return (
                    <Result movie={movie} />
                )
            })
        }
        </div>
        {/* <pre>{JSON.stringify({ movies }, undefined, 2)}</pre> */}
        </>
    )
}

export default Results;