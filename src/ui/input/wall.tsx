import React from "react";
import {TextField} from "@mui/material";

import {doParseFloatValue} from "../utils/values";
import {AtifWallParameters} from "../../dt/atif_wall_parameters";

export function AtifInputWallUI(props: {
    wallParameters: AtifWallParameters
    onWallParametersChange: (parameter: AtifWallParameters) => Promise<void>
}) {
    const newData = new AtifWallParameters(structuredClone(props.wallParameters))

    return <div>
        <TextField type={"number"}
                   label={"surface_charge_density"}
                   value={props.wallParameters.surface_charge_density}
                   onChange={async (event) => {
                       newData.surface_charge_density = doParseFloatValue(event.target.value, props.wallParameters.surface_charge_density)
                       await props.onWallParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"monomers"}
                   value={props.wallParameters.sf_block_number}
                   onChange={async (event) => {
                       newData.sf_block_number = doParseFloatValue(event.target.value, props.wallParameters.sf_block_number)
                       await props.onWallParametersChange(newData)
                   }}/>


        <TextField type={"number"}
                   label={"positive_salt"}
                   value={props.wallParameters.sf_positive_salt}
                   onChange={async (event) => {
                       newData.sf_positive_salt = doParseFloatValue(event.target.value, props.wallParameters.sf_positive_salt)
                       await props.onWallParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"negative_salt"}
                   value={props.wallParameters.sf_negative_salt}
                   onChange={async (event) => {
                       newData.sf_negative_salt = doParseFloatValue(event.target.value, props.wallParameters.sf_negative_salt)
                       await props.onWallParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"positive_counterion"}
                   value={props.wallParameters.sf_positive_counterion}
                   onChange={async (event) => {
                       newData.sf_positive_counterion = doParseFloatValue(event.target.value, props.wallParameters.sf_positive_counterion)
                       await props.onWallParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"negative_counterion"}
                   value={props.wallParameters.sf_negative_counterion}
                   onChange={async (event) => {
                       newData.sf_negative_counterion = doParseFloatValue(event.target.value, props.wallParameters.sf_negative_counterion)
                       await props.onWallParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"solvent"}
                   value={props.wallParameters.sf_solvent}
                   onChange={async (event) => {
                       newData.sf_solvent = doParseFloatValue(event.target.value, props.wallParameters.sf_solvent)
                       await props.onWallParametersChange(newData)
                   }}/>
    </div>
}
