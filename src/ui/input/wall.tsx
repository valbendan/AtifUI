import React from "react";
import {TextField, Stack} from "@mui/material";

import {doParseFloatValue} from "../utils/values";
import {AtifWallParameters} from "../../dt/atif_wall_parameters";
import {MultiNumberValueTextField} from "../blocks/m_values";

export function AtifInputWallUI(props: {
    wallParameters: AtifWallParameters
    blockNumber: number
    onWallParametersChange: (parameter: AtifWallParameters) => Promise<void>
}) {
    const newData = new AtifWallParameters(structuredClone(props.wallParameters))

    return <Stack spacing={2}>
        <TextField type={"number"}
                   label={"surface_charge_density"}
                   value={props.wallParameters.surface_charge_density}
                   onChange={async (event) => {
                       newData.surface_charge_density = doParseFloatValue(event.target.value, props.wallParameters.surface_charge_density)
                       await props.onWallParametersChange(newData)
                   }}/>

        <MultiNumberValueTextField
            label={"sf_block_number"}
            error={props.wallParameters.sf_block_number.length != props.blockNumber}
            helperText={"Short-range external potential energy parameter!"}
            onMValuesChange={async (mValues) => {
                newData.sf_block_number = mValues
                await props.onWallParametersChange(newData)
            }}
        />


        <TextField type={"number"}
                   label={"positive_salt"}
                   value={props.wallParameters.sf_positive_salt}
                   helperText={"Short-range external potential energy parameter!"}
                   onChange={async (event) => {
                       newData.sf_positive_salt = doParseFloatValue(event.target.value, props.wallParameters.sf_positive_salt)
                       await props.onWallParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"negative_salt"}
                   value={props.wallParameters.sf_negative_salt}
                   helperText={"Short-range external potential energy parameter!"}
                   onChange={async (event) => {
                       newData.sf_negative_salt = doParseFloatValue(event.target.value, props.wallParameters.sf_negative_salt)
                       await props.onWallParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"positive_counterion"}
                   value={props.wallParameters.sf_positive_counterion}
                   helperText={"Short-range external potential energy parameter!"}
                   onChange={async (event) => {
                       newData.sf_positive_counterion = doParseFloatValue(event.target.value, props.wallParameters.sf_positive_counterion)
                       await props.onWallParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"negative_counterion"}
                   value={props.wallParameters.sf_negative_counterion}
                   helperText={"Short-range external potential energy parameter!"}
                   onChange={async (event) => {
                       newData.sf_negative_counterion = doParseFloatValue(event.target.value, props.wallParameters.sf_negative_counterion)
                       await props.onWallParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"solvent"}
                   value={props.wallParameters.sf_solvent}
                   helperText={"Short-range external potential energy parameter!"}
                   onChange={async (event) => {
                       newData.sf_solvent = doParseFloatValue(event.target.value, props.wallParameters.sf_solvent)
                       await props.onWallParametersChange(newData)
                   }}/>
    </Stack>
}
