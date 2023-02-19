import React from "react";
import {TextField} from "@mui/material";

import {doParseFloatValue} from "../utils/values";
import {AtifDiameterParameters} from "../../dt/atif_diameter_parameters";
import { MultiNumberValueTextField } from "../blocks/m_values";

export function AtifInputDiameterUI(props: {
    diameterParameters: AtifDiameterParameters
    blockNumber: number
    onDiameterParametersChange: (parameter: AtifDiameterParameters) => Promise<void>
}) {
    const newData = new AtifDiameterParameters(structuredClone(props.diameterParameters))

    return <div>
        <MultiNumberValueTextField label={"diameter_block_number"}
            error={props.diameterParameters.diameter_block_number.length != props.blockNumber}
            helperText={`diameter_block_number should be equal to ${props.blockNumber}`}
            onMValuesChange={async (mValues) => {
                newData.diameter_block_number = mValues
                await props.onDiameterParametersChange(newData)
            }} />

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
