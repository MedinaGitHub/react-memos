import {memo} from 'react'

const CountButton = memo(function CountButton({onClick, count}) {
    return <button onClick={onClick}>{count}</button>
  })
  
  export default CountButton


  












  /*
const CountButton = memo(function CountButton({onClick, count}) {
    return <button onClick={onClick}>{count}</button>
  },(prevProps, nextProps)=>{
    //Si retornamos true:  No se renderiza
    //Si retornamos false: Si se renderiza
    return (
      prevProps.data.title === nextProps.data.title &&
      prevProps.data.counter === nextProps.data.counter
    )
  })
  */

