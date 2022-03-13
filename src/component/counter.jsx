import React from "react";

const Counter = () => {

    const [count,setCount] = React.useState(1);


   function changeCount(val){
    // setCount(count + val);

    setCount((prevCount)=>{

        return prevCount + val;
    })
}
function doubleCount(){

    setCount((prevCount)=>{

        return prevCount * 2;
    })

}
   

    // if(count < 0 || count >= 10){
    //     return <h1>Counter Should be between 0 and 10</h1>
    // }

    return (

        <>
            <div>Counter : {count}</div>
            <button onClick={()=> changeCount(+1)}>Add</button>
            <button onClick={()=> changeCount(-1)}>Sub</button>
            <button onClick={()=> doubleCount()}>Double</button>
            {/* Conditionally Render */}
        </>
    )
}

export {Counter};