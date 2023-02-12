import React from "react";
import {TextField} from "@mui/material";

import {doParseFloatValue} from "../utils/values";
import {AtifSaltParameters} from "../../dt/atif_salt_parameters";

export function AtifInputSaltUI(props: {
    saltParameters: AtifSaltParameters
    onSaltParametersChange: (parameter: AtifSaltParameters) => Promise<void>
}) {
    const newData = new AtifSaltParameters(structuredClone(props.saltParameters))

    return <div>
        <TextField type={"number"}
                   label={"M"}
                   value={props.saltParameters.M}
                   onChange={async (event) => {
                       newData.M = doParseFloatValue(event.target.value, props.saltParameters.M)
                       await props.onSaltParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"volume"}
                   value={props.saltParameters.volume}
                   onChange={async (event) => {
                       newData.volume = doParseFloatValue(event.target.value, props.saltParameters.volume)
                       await props.onSaltParametersChange(newData)
                   }}/>
    </div>
}
