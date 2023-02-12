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
                   value={props.diameterParameters.monomers}
                   onChange={async (event) => {
                       newData.monomers = doParseFloatValue(event.target.value, props.diameterParameters.monomers)
                       await props.onDiameterParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"positive_salt"}
                   value={props.diameterParameters.positive_salt}
                   onChange={async (event) => {
                       newData.positive_salt = doParseFloatValue(event.target.value, props.diameterParameters.positive_salt)
                       await props.onDiameterParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"negative_salt"}
                   value={props.diameterParameters.negative_salt}
                   onChange={async (event) => {
                       newData.negative_salt = doParseFloatValue(event.target.value, props.diameterParameters.negative_salt)
                       await props.onDiameterParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"positive_counterion"}
                   value={props.diameterParameters.positive_counterion}
                   onChange={async (event) => {
                       newData.positive_counterion = doParseFloatValue(event.target.value, props.diameterParameters.positive_counterion)
                       await props.onDiameterParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"negative_counterion"}
                   value={props.diameterParameters.negative_counterion}
                   onChange={async (event) => {
                       newData.negative_counterion = doParseFloatValue(event.target.value, props.diameterParameters.positive_counterion)
                       await props.onDiameterParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"hard_sphere_solvent"}
                   value={props.diameterParameters.hard_sphere_solvent}
                   onChange={async (event) => {
                       newData.hard_sphere_solvent = doParseFloatValue(event.target.value, props.diameterParameters.hard_sphere_solvent)
                       await props.onDiameterParametersChange(newData)
                   }}/>
    </div>
}
