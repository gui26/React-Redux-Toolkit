import React from "react";
import './../styles/Box.scss';


type Props ={
    className: string;
}
export const Box = (props: Props) =>{
    return(
        <div className={props.className}>
            <h1>Box container</h1>
        </div>
    )
}

export default Box;