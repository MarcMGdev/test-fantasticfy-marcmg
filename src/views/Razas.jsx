import { useState , useEffect } from "react";
import { getAllImages } from "../services/peticiones";
import Actions from "./Actions";
function Razas ({razas}){
  const [images, setImages] = useState();
      
useEffect(() => {
    getAllImages(razas).then(resultado => setImages(resultado));
  }, [images]);
  
return(
     <>
        <h3>Raza :</h3>
        <li key={razas}>{razas}</li>
        <div>
            <h4>Imagenes</h4>
            {images?<img src={images[0]} height="500"></img>: null}
        </div>
       
      
    </>
    )
   
    }

    // onclick="agrandarImagen"
    // // function agrandarImagen(){
    // //   img.style.transform = "scale(1.5)";
    // // }
export default Razas; 