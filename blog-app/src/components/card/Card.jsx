//! Both is work

//! this is destructure
// import React from 'react';

// function Card(props) {
//   console.log(props);
//   const { titleText, desc } = props;

//   return (
//     <>
//       <h1>{titleText}</h1>
//       <h2>{desc}</h2>
//     </>
//   );
// }

// export default Card;


import React from 'react';

function Card(props) {
  console.log(props);
  // const { titleText, desc } = props;

  return (
    <>
      <h1>{props.titleText}</h1>
      <h2>{props.desc}</h2>
    </>
  );
}

export default Card;