import React from "react";
import ComponentC from "./ComponentC";

export const UserContext = React.createContext();
export const CountryContext = React.createContext();

const MainComponent = (props) =>{
    return(
        <UserContext.Provider value={"Saquib"}>
            <CountryContext.Provider value={"India"}>
                <ComponentC />
            </CountryContext.Provider>    
        </UserContext.Provider>
    );
};

export default MainComponent;

