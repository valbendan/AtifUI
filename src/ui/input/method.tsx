import React from "react";
import {TextField, Autocomplete} from "@mui/material";

import {AtifMethodParameters} from "../../dt/atif_method_parameters";
import {doParseFloatValue} from "../utils/values";


interface AtifInputMethodUIProps {
    methodParameters: AtifMethodParameters
    onMethodParameterChange: (parameter: AtifMethodParameters) => Promise<void>
}

export function AtifInputMethodUI(props: AtifInputMethodUIProps) {
    const newMethodParameters = new AtifMethodParameters(structuredClone(props.methodParameters))

    return <>
        <Autocomplete
            value={props.methodParameters.method}
            renderInput={(args) => {
                return <TextField {...args}
                                  value={props.methodParameters.method}
                                  label={"method"}
                                  helperText={"本次运行的方法: DFT 或 SCFT"}/>
            }}
            onChange={async (event, value) => {
                newMethodParameters.method = value
                await props.onMethodParameterChange(newMethodParameters)
            }}
            options={['DFT', 'SCFT']}/>

        <Autocomplete
            value={props.methodParameters.geometry}
            renderInput={(args) => {
                return <TextField {...args}
                                  value={props.methodParameters.geometry}
                                  label={"geometry"}
                                  helperText={"geometry"}
                                  onChange={async (event) => {
                                      newMethodParameters.geometry = event.target.value
                                      await props.onMethodParameterChange(newMethodParameters)
                                  }}/>
            }}
            onChange={async (event, value) => {
                newMethodParameters.geometry = value
                await props.onMethodParameterChange(newMethodParameters)
            }}
            options={['Planar', 'Spherical', 'Cylindrical']}/>

        <Autocomplete
            value={props.methodParameters.surface}
            renderInput={(args) => {
                return <TextField {...args}
                                  value={props.methodParameters.surface}
                                  label={"surface"}
                                  helperText={"surface"}/>
            }}
            onChange={async (event, value) => {
                newMethodParameters.surface = value
                await props.onMethodParameterChange(newMethodParameters)
            }}
            options={['Single', 'Two']}/>

        <Autocomplete
            value={props.methodParameters.srep}
            renderInput={(args) => {
                return <TextField {...args}
                                  value={props.methodParameters.srep}
                                  label={"srep"}
                                  helperText={"the model of short-range external potential: LJ(Lenard-Jones)/SW(Square-well) potential"}
                />
            }}
            onChange={async (event, value) => {
                newMethodParameters.srep = value
                await props.onMethodParameterChange(newMethodParameters)
            }}
            options={['LJ', 'SW']}/>

        <TextField
            type={"number"}
            value={props.methodParameters.charge_shell_model[0].toString()}
            label={"charge shell model: A"}
            helperText={"Charge shell model: 0<=B<=A<=1 (B&A: parameters in charge shell model)"}
            onChange={async (event) => {
                const value = doParseFloatValue(event.target.value, newMethodParameters.charge_shell_model[0])
                newMethodParameters.charge_shell_model[0] = value
                await props.onMethodParameterChange(newMethodParameters)
            }}
        />

        <TextField
            type={"number"}
            value={props.methodParameters.charge_shell_model[1].toString()}
            label={"charge shell model: B"}
            helperText={"Charge shell model: 0<=B<=A<=1 (B&A: parameters in charge shell model)"}
            onChange={async (event) => {
                const value = doParseFloatValue(event.target.value, newMethodParameters.charge_shell_model[1])
                newMethodParameters.charge_shell_model[1] = value
                await props.onMethodParameterChange(newMethodParameters)
            }}
        />
    </>
}


