import React from "react";
import {TextField} from "@mui/material";

import {doParseFloatValue} from "../utils/values";
import {AtifEnergyParameters} from "../../dt/atif_energy_parameters";

export function AtifInputEnergyUI(props: {
    energyParameters: AtifEnergyParameters
    onEnergyParametersChange: (parameter: AtifEnergyParameters) => Promise<void>
}) {
    const newData = new AtifEnergyParameters(structuredClone(props.energyParameters))

    return <div>
        <TextField type={"number"}
                   label={"positive salt"}
                   value={props.energyParameters.positive_salt}
                   onChange={async (event) => {
                       newData.positive_salt = doParseFloatValue(event.target.value, props.energyParameters.positive_salt)
                       await props.onEnergyParametersChange(newData)
                   }}/>


        <TextField type={"number"}
                   label={"negative_salt"}
                   value={props.energyParameters.negative_salt}
                   onChange={async (event) => {
                       newData.negative_salt = doParseFloatValue(event.target.value, props.energyParameters.negative_salt)
                       await props.onEnergyParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"positive_counterions"}
                   value={props.energyParameters.positive_counterions}
                   onChange={async (event) => {
                       newData.positive_counterions = doParseFloatValue(event.target.value, props.energyParameters.positive_counterions)
                       await props.onEnergyParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"negative counterions"}
                   value={props.energyParameters.negative_counterions}
                   onChange={async (event) => {
                       newData.negative_counterions = doParseFloatValue(event.target.value, props.energyParameters.negative_counterions)
                       await props.onEnergyParametersChange(newData)
                   }}/>
    </div>
}