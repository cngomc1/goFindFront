import { useState } from "react"
import React from "react"
import { Hero } from "./components/hero"
import StolenDevice from "./components/stolen-device"
import CoLocation from "./components/colocation"
import CoVoiturage from "./components/covoiturage"

const Home = () =>{
    return (
        <div className="home">
            <Hero/>
            <Presentation/>
            <StolenDevice/>
            <CoVoiturage/>
            <CoLocation/>
        </div>
    )
}

export default Home;


export const Presentation = () =>{
    return(
        <div style={{background:"white",}}>
            <div className="title">
            How it works
            </div>
            <div className="services">
                <section  class="service">
                    <h2>Identifier un Objet Volé</h2>
                    <p>Recherchez dans notre base de données pour savoir si un objet a été déclaré volé.</p>
                    <button onclick="#identifier">Rechercher</button>
                </section>
                <section class="service">
                    <h2>Co-voiturage</h2>
                    <p>Trouvez ou proposez un trajet pour partager votre voyage.</p>
                    <button onclick="#covoiturage">Voir les trajets</button>
                </section>
                <section  class="service">
                    <h2>Co-location</h2>
                    <p>Louez ou proposez des chambres ou maisons pour de courtes durées.</p>
                    <button onclick="#colocation">Voir les locations</button>
                </section>
            </div>
        </div>
    )
}

