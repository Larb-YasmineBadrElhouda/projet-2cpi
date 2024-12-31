function header(){
    return(
        <header id="HD">
            <div >
                <h1 >AFO</h1>
                <h4>All For One One For All</h4>
                <div> 
                    <label for="dark"><i class="bx bx-moon"></i></label>
                    <input type="checkbox" id="dark"/> 
                    <i class="bx bx-sun"></i>
                </div>
                <div id="mini">
                    <label for="toggle"><i class="fa fa-bars"></i></label>
                    <input type="checkbox" id="toggle"/> 
                    <ul className="tog">
                        <label for="toggle" title="Fermer"><i class="bx bx-x"></i></label>
                        <a href="#"><li title="Acceuil"><i class="fa fa-home" id="icon" ></i><br></br>Acceuil</li></a>
                        <a href="#"><li title="Emplois"><i class="fa fa-briefcase" id="icon" ></i><br></br>Emplois</li></a>
                        <a href="#"><li title="Stages"><i class="fa fa-id-card" id="icon"></i><br></br>Stages</li></a>
                        <a href="#"><li  title="Projets"><i class="fa fa-line-chart" id="icon"></i><br></br>Projets</li></a>
                        <a href="#"><li title="Publicité"><i class='fas fa-bullhorn' id="icon"></i><br></br>Publicité</li></a>
                        <a href="#"><li id="f">Contacter AFO</li></a>          
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default header;
    
       