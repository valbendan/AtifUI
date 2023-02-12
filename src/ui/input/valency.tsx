import React from "react";
import {TextField} from "@mui/material";

import {doParseFloatValue} from "../utils/values";
import {AtifValencyParameters} from "../../dt/atif_valency_parameters";


export function AtifInputValencyUI(props: {
    valencyParameters: AtifValencyParameters
    onValencyParametersChange: (parameter: AtifValencyParameters) => Promise<void>
}) {
    const newData = new AtifValencyParameters(structuredClone(props.valencyParameters))

    return <div>
        <TextField type={"number"}
                   label={"salt_positive"}
                   value={props.valencyParameters.salt_positive}
                   onChange={async (event) => {
                       newData.salt_positive = doParseFloatValue(event.target.value, props.valencyParameters.salt_positive)
                       await props.onValencyParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"salt_negative"}
                   value={props.valencyParameters.salt_negative}
                   onChange={async (event) => {
                       newData.salt_negative = doParseFloatValue(event.target.value, props.valencyParameters.salt_negative)
                       await props.onValencyParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"counterion_positive"}
                   value={props.valencyParameters.counterion_positive}
                   onChange={async (event) => {
                       newData.counterion_positive = doParseFloatValue(event.target.value, props.valencyParameters.counterion_positive)
                       await props.onValencyParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"counterion_negative"}
                   value={props.valencyParameters.counterion_negative}
                   onChange={async (event) => {
                       newData.counterion_negative = doParseFloatValue(event.target.value, props.valencyParameters.counterion_negative)
                       await props.onValencyParametersChange(newData)
                   }}/>
    </div>
}
