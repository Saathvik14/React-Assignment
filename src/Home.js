import React from "react";
import { Link } from "react-router-dom";

function LandingPageButton() {
    return(
        <>
        <Link to="/Register" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "24px"}}>
                Register!
            </span>
        </button>
    </Link>
    
    
    <Link to="/Login" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "24px"}}>
                 Login!
            </span>
        </button>
    </Link>
    </>
    );
    
    
    
}
function LandingFrameMessage() {
    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "white"
    }
    return <div style={style}>
        
        <div style={{"font-size": "96px"}}>
            Hello!!
        </div>
        
        <div style={{"font-size": "36px"}}>
        Welcome to order Management System,   
         Register or login!!
        </div>
        <br />
        <LandingPageButton />
    </div>
}

function LandingFrame() {
    const style = {
        "background-image": `url("file:///D:/Download/wallpaperflare.com_wallpaper%20(56).jpg")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }
    return <div style={style}>
        <LandingFrameMessage/>
    </div>
}
function Home() {
    return <div>
        <LandingFrame />
    </div>
}
export default Home