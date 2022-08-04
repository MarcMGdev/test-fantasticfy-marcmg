import { useState , useEffect } from "react";
// import { getAllImages } from "../services/peticiones";
function Actions ({razas,setRazas,setEmpty}){
  console.log(razas);
  const [busqueda, setbusqueda] = useState("");
// console.log(laraza);
  const handleChange=e=>{
    setbusqueda(e.target.value);
  }
  function handleClick(){
    filtrar(busqueda);
  }
  console.log(busqueda);

  const filtrar=(terminoBusqueda)=>{
   let resultado = razas.filter(e=>{
    if (e.toLowerCase()===terminoBusqueda.toLowerCase()){
      return true ;
    }
    return false;
   }
   );
   if(resultado.lenght==0){setEmpty(true)}
   console.log(resultado);
    setRazas(resultado);
  }
// useEffect(() => {
//     getAllImages(razas).then(setImages);
//   }, [images]);
return(
     <>
    <div className="containerInput">
        <input 
        className="buscador-razas"
        value={busqueda || ""}
        placeholder="Introduce la raza de un perro"
        onChange={handleChange}>
        
        </input>
        <button className="btn btn-success" onClick={handleClick}>Buscar</button>

    </div>
    
    </>
    )
    }
export default Actions; 