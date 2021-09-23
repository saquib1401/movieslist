import React, { useState } from "react";
import '../Css/Count.css';

const Count = (props) =>{
    const[count, setState] = useState(0);
    
    var btns = document.querySelectorAll(".btn");
    var reset  = document.querySelector("#reset");

    btns.forEach(function(btn){
        btn.addEventListener("click",function(e){
            var styles = e.currentTarget.classList;
    
            if(styles.contains("decreament")){
                setState(count-1);
            }else if(styles.contains("increament")){
                setState(count-1);
            }else{
                setState(0);
            }
            reset.textContent=setState(count);
        });
    });

        return(
            <main>
                <div class="container">
                    <div class="Resetvalue" id="reset">{count}</div>
                    <div class="btnsvalue">
                        <button class="btn decreament" >Decreament</button>
                        <button class="btn reset" >Reset</button>
                        <button class="btn increament">Increament</button>
                    </div>
                </div>
            </main>
        )
    
}

export default Count;