import React,{ useEffect } from 'react';
import axios from "axios"
const Display = ({ closed, locked }) => {
  const closedClass = `led ${closed ? 'red-led' : 'green-led'}`;
  const lockedClass = `led ${locked ? 'red-led' : 'green-led'}`;
  useEffect(() => {
    axios.get("https://parallelum.com.br/fipe/api/v1/carros/marcas")
  .then(res => {
      console.log(res.data)
    })
  .catch(err => {
      console.log(err)
  })
}
  )

  return (
    <div className="display panel">
      <div className={lockedClass}>{locked ? 'Locked' : 'Unlocked'}</div>
      <div className={closedClass}>{closed ? 'Closed' : 'Open'}</div>
    </div>
  );
};
  

Display.defaultProps = {
  closed: false,
  locked: false,
};

export default Display;
