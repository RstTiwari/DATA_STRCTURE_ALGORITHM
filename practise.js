import React,{useState} from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    setCount((pre)=>{
        pre + 3
    })
  return (
    <div>
      
    </div>
  )
}

export default practise

const thorttling  =(func,count)=>{
    return func()
} 
