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
                   label={"salt_concentration"}
                   value={props.saltParameters.salt_concentration}
                   onChange={async (event) => {
                       newData.salt_concentration = doParseFloatValue(event.target.value, props.saltParameters.salt_concentration)
                       await props.onSaltParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"volume_fraction"}
                   value={props.saltParameters.volume_fraction}
                   onChange={async (event) => {
                       newData.volume_fraction = doParseFloatValue(event.target.value, props.saltParameters.volume_fraction)
                       await props.onSaltParametersChange(newData)
                   }}/>
    </div>
}
