import React, { useState } from "react";
import "./hobbies.css"

const Hobbies = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    }

    return ( 
    <section className = "hobbies_section"
        id = "hobbies" >
            <h2 className = "section_title" > Hobbies </h2>
            <span className = "section_subtitle" >Things, Which Relieve me from Stress and Tension</span>

        <div className = "hobbies_container container grid" >
            <div className = "hobbies_content" >
                <div>
                    <i className = "uil uil-headphones hobbies_icon" > </i>
                    <h3 className = "hobbies_title" >Listening<br/> Songs</h3>
                </div>

                <span className = "hobbies_button" onClick={()=>toggleTab(1)}> View more 
                    <i className = "bx bx-right-arrow-alt hobbies_button-icon" > </i> 
                </span>

                <div className = {toggleState===1 ? "hobbies_model active-model" : "hobbies_model"} >
                    <div className = "hobbies_model-content" >
                        <i className = "uil uil-times hobbies_model-close" onClick={()=>toggleTab(0)}> </i>

                        <h3 className = "hobbies_model-title" >Listening Songs</h3>
                        <p className="hobbies_model-description">Series of notes played in an order that is memorable and recognizable.</p>

                        <ul className="hobbies_model-hobbies grid">
                            <li className="hobbies_model-service">
                                <i className="uil uil-check-circle service_model-icon"></i>
                                <p className="hobbies_model-info">
                                Loved the Pop, Hip Hop, Indie, Blues & Soul.</p>
                            </li>

                            <li className="hobbies_model-service">
                                <i className="uil uil-check-circle service_model-icon"></i>
                                <p className="hobbies_model-info">
                                Fav Singers Bruno Mars, SZA, Weekend..& so On.</p>
                            </li>

                            <li className="hobbies_model-service">
                                <i className="uil uil-check-circle service_model-icon"></i>
                                <p className="hobbies_model-info">
                                Open Arms by SZA ❣️. </p>
                            </li>

                        </ul>
                    </div>
                </div> 
         </div>
         
         <div className = "hobbies_content" >
                <div>
                    <i className = "uil uil-dumbbell hobbies_icon" > </i>
                    <h3 className = "hobbies_title" >Doing <br /> Sports</h3>
                </div>

                <span className = "hobbies_button" onClick={()=>toggleTab(2)}> View more 
                    <i className = "bx bx-right-arrow-alt hobbies_button-icon" > </i> 
                </span>

                <div className = {toggleState===2 ? "hobbies_model active-model" : "hobbies_model"} >
                    <div className = "hobbies_model-content" >
                        <i className = "uil uil-times hobbies_model-close" onClick={()=>toggleTab(0)}> </i>

                        <h3 className = "hobbies_model-title" >Doing Sports</h3>
                        <p className="hobbies_model-description"> Love to doing sports especially inline skating.</p>

                    </div>
                </div> 
         </div>

         <div className = "hobbies_content" >
                <div>
                    <i className = "uil uil-bed hobbies_icon" > </i>
                    <h3 className = "hobbies_title" >Doing <br /> Some Sleep</h3>
                </div>

                <span className = "hobbies_button" onClick={()=>toggleTab(3)}> View more 
                    <i className = "bx bx-right-arrow-alt hobbies_button-icon" > </i> 
                </span>

                <div className = {toggleState===3 ? "hobbies_model active-model" : "hobbies_model"} >
                    <div className = "hobbies_model-content" >
                        <i className = "uil uil-times hobbies_model-close" onClick={()=>toggleTab(0)}> </i>

                        <h3 className = "hobbies_model-title" >Doing Some Sleep</h3>
                        <p className="hobbies_model-description">Simply Turu😴</p>

                    </div>
                </div> 
         </div>
         
         
        </div> 
    </section>
    );
};

export default Hobbies;