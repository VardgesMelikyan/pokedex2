import React from 'react';
import { MDBTooltip, MDBContainer, MDBBtn } from "mdbreact";

const Tooltip = (props) => {
    return (
        <MDBContainer className="text-center p-1 rounded w-35">
            <MDBTooltip placement="top">
                <MDBBtn>{props.label}</MDBBtn>
                <div>{props.data}</div>
            </MDBTooltip>
        </MDBContainer>
    );
}

export default Tooltip