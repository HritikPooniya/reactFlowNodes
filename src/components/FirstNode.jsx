import React from 'react'
import { Handle, Position, useReactFlow } from '@xyflow/react'
const FirstNode = (value) => {

  const id = value.id;
  const { setNodes } = useReactFlow();
  return (
    <>
    <div style={{border:'1px solid black',width:'10rem',background:'white',borderRadius:'5px'}}>
   <div className='px-2 d-flex justify-content-between align-items-center' style={{background:'rgb(233,90,100)',borderRadius:'5px 5px 0 0',color:'white'}}>Message
   <i className="ms-5 fa fa-close" style={{cursor:'pointer',color:'white'}} title='Delete Node' onClick={()=>setNodes(prev => prev.filter(node => node.id !== id))}></i></div>

   <div className='d-flex justify-content-center align-items-center' style={{height:'3rem'}}>
    This is Message box.
   </div>
   <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
   </div>
    </>
   
  )
}

export default FirstNode    