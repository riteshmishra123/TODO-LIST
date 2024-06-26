import React, { useState } from 'react'

function TodoList() {
    const[activity,setActivity]=useState("")
    const[listData,setlistData]=useState([])
    function addActivity(){
            //setlistData([...listData,activity])
            //console.log(listData)
            setlistData((listData)=>{
                const updatedList=[...listData,activity]
                console.log(updatedList)
                setActivity('')//baad me ht jaye click ke baad
                return updatedList
            })
    }
    function removeActivity(i){
        const updatedListData=listData.filter((elem,id)=>{
          return i!=id;
        })
        setlistData(updatedListData)
    }
    function removeAll(){
      setlistData([])
    }
  return (
    <div>
      <div className='container'>
        <div className='header'>TODO LIST</div>
        <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}></input>
        <button onClick={addActivity}>Add</button>
        <p className='List-heading'>Here is your List :{")"}</p>
        {listData!=[] && listData.map((data,i)=>{
          return(
            <>
              <p key={i}>
                  <div className='listData'>{data}</div>
                  <div className='btn-position'><button onClick={()=>removeActivity(i)}>remove(-)</button></div>
              </p>
            </>
          )
        })}
        {listData.length>=1 &&<button onClick={removeAll}>Remove All</button>}
      </div>
    </div>
  )
}
export default TodoList
