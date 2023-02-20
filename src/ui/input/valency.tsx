import React from "react";
import {TextField, Stack} from "@mui/material";

import {doParseFloatValue} from "../utils/values";
import {AtifValencyParameters} from "../../dt/atif_valency_parameters";


export function AtifInputValencyUI(props: {
    valencyParameters: AtifValencyParameters
    onValencyParametersChange: (parameter: AtifValencyParameters) => Promise<void>
}) {
    const newData = new AtifValencyParameters(structuredClone(props.valencyParameters))

    return <Stack spacing={2}>
        <TextField type={"number"}
                   label={"salt_positive"}
                   value={props.valencyParameters.valency_salt_positive}
                   onChange={async (event) => {
                       newData.valency_salt_positive = doParseFloatValue(event.target.value, props.valencyParameters.valency_salt_positive)
                       await props.onValencyParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"salt_negative"}
                   value={props.valencyParameters.valency_salt_negative}
                   onChange={async (event) => {
                       newData.valency_salt_negative = doParseFloatValue(event.target.value, props.valencyParameters.valency_salt_negative)
                       await props.onValencyParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"counterion_positive"}
                   value={props.valencyParameters.valency_counterion_positive}
                   onChange={async (event) => {
                       newData.valency_counterion_positive = doParseFloatValue(event.target.value, props.valencyParameters.valency_counterion_positive)
                       await props.onValencyParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"counterion_negative"}
                   value={props.valencyParameters.valency_counterion_negative}
                   onChange={async (event) => {
                       newData.valency_counterion_negative = doParseFloatValue(event.target.value, props.valencyParameters.valency_counterion_negative)
                       await props.onValencyParametersChange(newData)
                   }}/>
    </Stack>
}
