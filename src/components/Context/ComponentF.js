import React from "react";

import { UserContext, CountryContext } from "./MainComponent";

const ComponentF = (props) => {
    return (
        <UserContext.Consumer>
            {
                (user) => (
                    <CountryContext.Consumer>
                        {
                            (country) => {
                                return `${user} -> ${country}`;
                            } 
                        }
                    </CountryContext.Consumer>
            )}
        </UserContext.Consumer>
    );
}
export default ComponentF;

