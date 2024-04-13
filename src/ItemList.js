import React from "react";

function DisplayItems(){

    const fruitItems = ["apple", "banana", "orange", "kiwi", "pear"];
    const fruits = [];

    fruitItems.forEach((fruit, index) => {
        fruits.push(<li key={index}>{fruit}</li>)
    });

    return(
        <div>
            <ul>
                {fruits}
            </ul>
        </div>
    );
}

export default DisplayItems;