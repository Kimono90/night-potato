import React from "react";
import '../recipe-overview-page/recipe-overview-page.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function RecipeOverviewPage() {
    return (
        <div className="overview-page">
            Recipe Overview Page
            <div className="recipe-tile">
                <strong>Vegetarian Chickpea Curry</strong>
                <div className="recipe-info-block">
                    <div className="recipe-info">
                        <p><FontAwesomeIcon icon={["fas", "male"]} /> - 4</p>
                        <p><FontAwesomeIcon icon={["far", "clock"]} /> - 50 mins</p>
                        <p><FontAwesomeIcon icon={["fas", "hamburger"]} /> - 500 kcal</p>
                    </div>
                    <div style={{maxWidth: "50%", maxHeight: "100%", padding: "0", margin: "0" }}>
                        <img
                            className="recipe-photo"
                            src="https://www.eefkooktzo.nl/wp-content/uploads/2020/04/Indiase-curry-met-paneer.jpg"
                            alt="curry"
                            style={{maxHeight: "100%", maxWidth: "100%", objectFit: "contain"}}
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    )
}