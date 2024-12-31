function aside (){
    return(
        <aside >
            <div id="titre">
                <img src="nahla.png" alt="myphoto" title="Mone compte"></img>
                <br></br><br></br>
                <h2 title="Mon compte">Nabahet</h2>
            </div>
            <div class="barre">
                <ul>
                    <li title="Historique" id="his">
                        <i class='bx bxs-user-account' ></i>
                        <h4 id="dec">Historique</h4>
                    </li>
                    <li title="Notifications">
                        <i class='bx bxs-bell'  ></i>
                        <h4 id="dec">Notifications</h4>
                    </li>
                    <li title="Paramétres">
                        <i class='bx bx-cog' ></i>
                        <h4 id="dec">Paramétres</h4>
                    </li>      
                    <li className="deconnecter" title="Déconnecter">
                        <i class='bx bx-log-out' ></i>
                        <h4 id="dec">Déconnecter</h4>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default aside;