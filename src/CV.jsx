import cv from "./cv.module.css"

function Cv(){
    return(
        <div className={cv.body}>
            <form action="a" className={cv.for}>           
                <div className={cv.div1}>
                    <span>Nom :</span><br></br>
                    <input type="text" required></input><br></br><br></br>
                    <span>Prénom : </span><br></br>
                    <input type="text" required></input><br></br>
                    <button className={cv.image} title="Votre photo"><i class='fas fa-cloud-upload-alt'></i></button><br></br>
                    <u><h2 className={cv.pr}> À propos de moi</h2></u><br></br>
                    <h5>Date de naissance</h5>&nbsp;&nbsp;&nbsp;
                    <input type="date" className={cv.date}></input><br></br>
                    <h5 className={cv.wi}>Wilaya</h5>&nbsp;&nbsp;&nbsp;
                    <input type="number" className={cv.inw}></input><br></br><br></br>
                    <span className={cv.per}>Avez-vous un permis de conduite ?</span>&nbsp;&nbsp;&nbsp;
                    <input type="checkbox" className={cv.per}></input><br></br>
                    <i><h3 className={cv.des}>Description</h3></i>
                    <textarea className={cv.ides}></textarea><br></br>
                    <h3 className={cv.con}>Conctact</h3>
                    <span className={cv.ce}><i class="fa fa-envelope"></i></span>&nbsp;&nbsp;
                    <input type="email" className={cv.ce}></input><br></br><br></br>
                    <span className={cv.ct}><i class="fab fa-whatsapp"></i></span>&nbsp;&nbsp;
                    <input type="tel" className={cv.ct}></input><br></br>
                </div>
                <div className={cv.div2}>
                    <br></br>
                    <u><h3 className={cv.ex}>Expériences</h3></u>
                    <textarea className={cv.iex}></textarea><br></br><br></br>
                    <h5 className={cv.cgs}>Compétences Générales:</h5>   
                    <i className={cv.cgi}>Communication</i>
                    <input type="checkbox" className={cv.cgi}></input>  <br></br>  
                    <i className={cv.cgi}>Gestion du temps</i>
                    <input type="checkbox" className={cv.cgi}></input>   <br></br>   
                    <i className={cv.cgi}>Intelligence émotionnelle</i>
                    <input type="checkbox" className={cv.cgi}></input>  <br></br>   
                    <i className={cv.cgi}>Créativité</i> 
                    <input type="checkbox" className={cv.cgi}></input> <br></br>
                    <i className={cv.cgi}>Travail d'équipe</i>
                    <input type="checkbox" className={cv.cgi}></input><br></br>
                    <h5 className={cv.cte}>Compétences Técniques:</h5>
                    <textarea  className={cv.cta}></textarea>
                    <u><h3 className={cv.ed}>Education</h3></u>
                    <h4 className={cv.l}>Langues maitrisées :</h4>
                    <button className={cv.l}>+</button>&nbsp;&nbsp;
                    <select className={cv.l}>
                        <option value="Niveau">Niveau</option>
                        <option value="A1">A1</option>
                        <option value="A2">A2</option>
                        <option value="B1">B1</option>
                        <option value="B2">B2</option>
                        <option value="C1">C1</option>
                        <option value="C2">C2</option>
                    </select>
                    <h4 className={cv.l}>Niveau Académique</h4>
                    <select className={cv.l}>
                        <option value="Primaire">Primaire</option>
                        <option value="CEM">CEM</option>
                        <option value="BEM">BEM</option>
                        <option value="Secondaire">Secondaire</option>
                        <option value="BAC">BAC</option>
                        <option value="Liscence">Liscence</option>
                        <option value="Master-1">Master-1</option>
                        <option value="Mastr-2">Master-2</option>
                        <option value="Doctaurat">Doctaurat</option> 
                        <option value="FEP">FEP</option> 
                    </select> 
                    <h3 className={cv.l}>Certaficats</h3>
                    <button className={cv.lb}>+</button>
                    <h3 className={cv.ld}>Diplomes</h3>
                    <button className={cv.lbd}>+</button>
                </div>
            </form>
            <div className={cv.peree}></div>
        </div>
    );
}

export default Cv;