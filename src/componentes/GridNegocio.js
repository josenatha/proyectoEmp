import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NegocioItem } from './NegocioItem'
import './styles.css';



 const GridNegocio =  () => {
   const [negocios, setNegocios] = useState([])
   const getNegocios = async() =>{

     const {data} = await axios.get('https://emprendedores-estaca-chilpo.herokuapp.com/api/negocios')
     //  const request = await fetch('https://emprendedores-estaca-chilpo.herokuapp.com/api/negocios')
     //const data = await request.json();

      setNegocios(data.negocios)
    }
    useEffect(() => {
        getNegocios()
    }, []);
  console.log(negocios)

    return (
      <>
        <div className='items'>
            {negocios.length>0 && negocios.map( (negocio, idx) => 
            <NegocioItem key={idx} nombre={negocio.nombre} logotipo={negocio.logotipo}/> )
            
        }
        
        </div>
        <form className='from' onSubmit={(e) => {e.preventDefault()
          const nombre = e.target[0].value
          const logotipo = e.target[1].value
          const ubicacion = e.target[2].value
          const telefono = e.target[3].value
          
         axios.post('https://emprendedores-estaca-chilpo.herokuapp.com/api/negocios',{nombre,logotipo,ubicacion,telefono})
         window.location.reload()
        }}>
  <div class="form-group">
    <label >Nombre</label>
    <input type="text" class="form-control"   placeholder="Nombre del negocio"/>
    </div>
  <div class="form-group">
    <label >logotipo</label>
    <input type="text" class="form-control"   placeholder="url de la imagen"/>
     </div>
  <div class="form-group">
    <label >Direccion</label>
    <input type="text" class="form-control"   placeholder="Direccion del local"/>
   </div>
  <div class="form-group">
    <label >Telefono</label>
    <input type="text" class="form-control"   placeholder="Enter email"/>
   
  </div>
  <button type="submit" class="btn btn-primary" >Submit</button>
</form>
        
           
         </>
    )
    
}


export  default GridNegocio;