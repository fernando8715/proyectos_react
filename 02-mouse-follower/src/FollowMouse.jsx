import { useEffect, useState } from "react";

export const FollowMouse = () => {
    const [enabled, setEnable] = useState(false);
    const [position, setPosition] = useState({x:0, y:0});
    
    useEffect( ()=> {
      
      const handleMove = (event)=> {
        const {clientX, clientY} = event;
        setPosition({x:clientX, y:clientY});
      } 
  
      if(enabled){ 
        window.addEventListener('pointermove', handleMove)
      };
  
      return ()=> {
        window.removeEventListener('pointermove', handleMove);
        setPosition({x: 0, y:0})
      }
    
    }, [enabled]);
    
  
    return (
      <main>
        <div style={{
          position : 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: .4,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}/>
        <button
          onClick={()=> setEnable(!enabled)}>
            {(enabled) ? 'Desactivar' : 'Activar'} seguir puntero
        </button>
      </main>
    )
}
