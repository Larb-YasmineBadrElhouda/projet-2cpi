import { useState } from "react"
import normal from "./normal.module.css"
import Facebook from "./Facebook"
import Instagram from "./Insta"

function Normal({setnoropen}){
    const[openface,setfaceop] =useState(false);
    const[openinsta,setinstaop] =useState(false);

    return(    
        <div>  
            <form action='e' className={normal.form}>
                <button className={normal.fer} onClick={()=>{setnoropen(false)}}><i class="bx bx-x" ></i></button>
                <h2 className={normal.h2}>AFO</h2> 
                <span > Nom d'utilisateur:</span><br></br>
                <input type="text" required className={normal.info}></input><br></br>
                <span>Adresse email:</span><br></br>
                <input type="adress" required className={normal.info}></input><br></br>
                <span > Mot de passe:</span><br></br>
                <input type="password" required className={normal.info}></input><br></br>
                <button className={normal.socialf} onClick={()=>{setfaceop(true)}}>Contunier avec &nbsp;&nbsp;&nbsp;<i class="fab fa-facebook"></i> </button><br></br><br></br>
                <button className={normal.sociali} onClick={()=>{setinstaop(true)}}>Contunier avec &nbsp;&nbsp;&nbsp;<i class="fab fa-instagram"></i> </button><br></br>
                <button className={normal.inscrire}>S'inscrire</button>
            </form>
            <div className={normal.pere}></div>
            {openface && <Facebook openfacee={setfaceop}/>};
            {openinsta && <Instagram openinstaa={setinstaop}/>}
        </div>  
    );
}

export default Normal;