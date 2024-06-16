import React from 'react';
import '../index.css'

const Nav = () =>{
    return(
        <div>
			<header>
			<img src='@/public/goFind_logo.jpg' alt="GoFind Logo" className="logo"/>
			<nav>
				<ul>
					<li><a href="#identifier">Objet</a></li>
					<li><a href="#covoiturage">CoVoiturage</a></li>
					<li><a href="#colocation">CoLocation</a></li>
					<li><a href="login.html">Deconnexion</a></li>
				</ul>
			</nav>
		</header>
        </div>
    )
}
export default Nav;