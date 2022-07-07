import {useState,useMemo, useCallback} from 'react'
import CountButton from './CountButton'
import CountButtonMemo from './CountButtonMemo'

export default function DualCounter() {
    const [count1, setCount1] = useState(0)
    const increment1 = () => setCount1(c => c + 1)
  
    const [count2, setCount2] = useState(0)
    //const increment2 = () =>  setCount2(c => c + 1)
   const increment2 =  useCallback( ()=> {setCount2(c => c + 1)},[]) 

   const getID = (id)=>{
    console.log('me estoy ejecutando',id)
    return 'seba' + id
}
const getIdByName = useMemo( ()=> getID(count2),[count2])
    return (
      <>
        <CountButton count={count1} onClick={increment1} />
        <CountButtonMemo count={count2} onClick={increment2}/>
        <span>componente hijo</span>
      </>
    )
  }

  /*
    const getID = (id)=>{
    console.log('me estoy ejecutando',id)
    return 'seba' + id
}
  */
  //const getIdByName =  getID(count2)
  //  {getIdByName }
  //const getIdByName = useMemo( ()=> getID(count2),[count2])