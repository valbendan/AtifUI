import React from "react";
import {TextField} from "@mui/material";

import {doParseFloatValue} from "../utils/values";
import {AtifDiameterParameters} from "../../dt/atif_diameter_parameters";

export function AtifInputDiameterUI(props: {
    diameterParameters: AtifDiameterParameters
    onDiameterParametersChange: (parameter: AtifDiameterParameters) => Promise<void>
}) {
    const newData = new AtifDiameterParameters(structuredClone(props.diameterParameters))

    return <div>
        <TextField type={"number"}
                   label={"monomers"}
                   value={props.diameterParameters.diameter_block_number}
                   onChange={async (event) => {
                       newData.diameter_block_number = doParseFloatValue(event.target.value, props.diameterParameters.diameter_block_number)
                       await props.onDiameterParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"positive_salt"}
                   value={props.diameterParameters.diameter_positive_salt}
                   onChange={async (event) => {
                       newData.diameter_positive_salt = doParseFloatValue(event.target.value, props.diameterParameters.diameter_positive_salt)
                       await props.onDiameterParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"negative_salt"}
                   value={props.diameterParameters.diameter_negative_salt}
                   onChange={async (event) => {
                       newData.diameter_negative_salt = doParseFloatValue(event.target.value, props.diameterParameters.diameter_negative_salt)
                       await props.onDiameterParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"positive_counterion"}
                   value={props.diameterParameters.diameter_positive_counterion}
                   onChange={async (event) => {
                       newData.diameter_positive_counterion = doParseFloatValue(event.target.value, props.diameterParameters.diameter_positive_counterion)
                       await props.onDiameterParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"negative_counterion"}
                   value={props.diameterParameters.diameter_negative_counterion}
                   onChange={async (event) => {
                       newData.diameter_negative_counterion = doParseFloatValue(event.target.value, props.diameterParameters.diameter_positive_counterion)
                       await props.onDiameterParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"hard_sphere_solvent"}
                   value={props.diameterParameters.diameter_solvent}
                   onChange={async (event) => {
                       newData.diameter_solvent = doParseFloatValue(event.target.value, props.diameterParameters.diameter_solvent)
                       await props.onDiameterParametersChange(newData)
                   }}/>
    </div>
}
