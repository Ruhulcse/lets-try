import React, { useState } from "react";

function Counter() {
  const [isDark, setDark] = useState(false);

  function clickMe() {
    console.log("clicked");
    setDark(false);
    // console.log(increment);
  }
  function decrement() {
    setDark(true);
  }
  return (
    <>
      {!isDark ? (
        <>
          <div class="container mt-5 bg-light">
            <h2>Hi your result is </h2>
            <button type="button" class="btn btn-success" onClick={clickMe}>
              Light mood
            </button>
            <button type="button" class="btn btn-danger" onClick={decrement}>
              Dark mood
            </button>
          </div>
        </>
      ) : (
        <>
          <div class="container mt-5 bg-dark">
            <h2>Hi your result is </h2>
            <button type="button" class="btn btn-success" onClick={clickMe}>
              Light mood
            </button>
            <button type="button" class="btn btn-danger" onClick={decrement}>
              Dark mood
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Counter;

//const increment = 0;

// const click = () => {
//  increment = increment+1
// };
