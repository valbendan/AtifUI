import React from "react";
import {TextField, Stack} from "@mui/material";

import {AtifSizeParameters} from "../../dt/atif_size_parameters";
import {doParseFloatValue} from "../utils/values";

export function AtifInputSizeUI(props: {
    sizeParameters: AtifSizeParameters
    onSizeParametersChange: (parameter: AtifSizeParameters) => Promise<void>
}) {
    const newData = new AtifSizeParameters(structuredClone(props.sizeParameters))

    return <Stack spacing={2}>
        <TextField type={"number"}
                   label={"box size"}
                   value={props.sizeParameters.box_size}
                   onChange={async (event) => {
                       newData.box_size = doParseFloatValue(event.target.value, props.sizeParameters.box_size)
                       await props.onSizeParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"step length"}
                   value={props.sizeParameters.step_length}
                   onChange={async (event) => {
                       newData.step_length = doParseFloatValue(event.target.value, props.sizeParameters.step_length)
                       await props.onSizeParametersChange(newData)
                   }}/>
    </Stack>
}
