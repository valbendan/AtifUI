import React from "react";
import {TextField} from "@mui/material";

import {doParseFloatValue} from "../utils/values";
import {AtifIterativeParameters} from "../../dt/atif_iterative_parameters";

export function AtifInputIterativeUI(props: {
    iterativeParameters: AtifIterativeParameters
    onIterativeParametersChange: (parameter: AtifIterativeParameters) => Promise<void>
}) {
    const newData = new AtifIterativeParameters(structuredClone(props.iterativeParameters))

    return <div>
        <TextField type={"number"}
                   label={"max_itera"}
                   value={props.iterativeParameters.max_itera}
                   onChange={async (event) => {
                       newData.max_itera = doParseFloatValue(event.target.value, props.iterativeParameters.max_itera)
                       await props.onIterativeParametersChange(newData)
                   }}/>


        <TextField type={"number"}
                   label={"mix_coe"}
                   value={props.iterativeParameters.mix_coe}
                   onChange={async (event) => {
                       newData.mix_coe = doParseFloatValue(event.target.value, props.iterativeParameters.mix_coe)
                       await props.onIterativeParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"cstep"}
                   value={props.iterativeParameters.cstep}
                   onChange={async (event) => {
                       newData.cstep = doParseFloatValue(event.target.value, props.iterativeParameters.cstep)
                       await props.onIterativeParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"phL_L"}
                   value={props.iterativeParameters.guess_surface_potential}
                   onChange={async (event) => {
                       newData.guess_surface_potential = doParseFloatValue(event.target.value, props.iterativeParameters.guess_surface_potential)
                       await props.onIterativeParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"err_tol"}
                   value={props.iterativeParameters.error_tolerance}
                   onChange={async (event) => {
                       newData.error_tolerance = doParseFloatValue(event.target.value, props.iterativeParameters.error_tolerance)
                       await props.onIterativeParametersChange(newData)
                   }}/>
    </div>
}
