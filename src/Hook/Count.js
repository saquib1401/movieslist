import React, { useState, useEffect } from "react";
import '../Css/Count.css';

const Count = (props) =>{  
    const[count, setState] = useState(0);

    useEffect (() => {
        if(count === 0){
            document.getElementById("reset").style.color="#000";
        }
        else if(count > 0){
            document.getElementById("reset").style.color="green";
        }
        else if(count < 0){
            document.getElementById("reset").style.color="red";
        }
    }, [count] );

    return(
        <main>
            <div class="container">
                <div class="Resetvalue" id="reset">{count}</div>
                <div class="btnsvalue">
                    <button class="btn decreament"
                        onClick ={ () => setState(count-1) } >Decreament</button>
                    <button class="btn reset" 
                        onClick = { () => setState(0) }>Reset</button>
                    <button class="btn increament" 
                        onClick = { () => setState(count+1) }>Increament</button>
                </div>
            </div>
        </main>
    )
}

export default Count;