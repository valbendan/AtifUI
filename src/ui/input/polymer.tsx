import React from "react";
import {TextField, Autocomplete} from "@mui/material";
import {AtifPolymerData, AtifPolymerParameters} from "../../dt/atif_polymer_parameters";
import {doParseFloatValue} from "../utils/values";


function AtifInputPolymerDataUI(props: {
    polymerData: AtifPolymerData,
    onPolymerDataChange: (data: AtifPolymerData) => Promise<void>
}) {
    const newData = new AtifPolymerData(structuredClone(props.polymerData))
    return <div>
        <TextField type={"number"}
                   label={"mp"}
                   value={props.polymerData.mp}
                   onChange={async (event) => {
                       newData.mp = doParseFloatValue(event.target.value, props.polymerData.mp)
                       await props.onPolymerDataChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"nb_blocks"}
                   value={props.polymerData.nb_blocks}
                   onChange={async (event) => {
                       newData.nb_blocks = doParseFloatValue(event.target.value, props.polymerData.nb_blocks)
                       await props.onPolymerDataChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"grafting_density"}
                   value={props.polymerData.grafting_density}
                   onChange={async (event) => {
                       newData.grafting_density = doParseFloatValue(event.target.value, props.polymerData.grafting_density)
                       await props.onPolymerDataChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"monomer_density"}
                   value={props.polymerData.monomer_density}
                   onChange={async (event) => {
                       newData.monomer_density = doParseFloatValue(event.target.value, props.polymerData.monomer_density)
                       await props.onPolymerDataChange(newData)
                   }}/>

        <TextField label={"chain_model"}
                   value={props.polymerData.chain_model}
                   onChange={async (event) => {
                       newData.chain_model = event.target.value
                       await props.onPolymerDataChange(newData)
                   }}/>
    </div>
}

export function AtifInputPolymerUI(props: {
    polymerParameters: AtifPolymerParameters
    onPolymerParametersChange: (parameter: AtifPolymerParameters) => Promise<void>
}) {
    const newData = structuredClone(props.polymerParameters)

    return <div>
        <AtifInputPolymerDataUI polymerData={props.polymerParameters.one}
                                onPolymerDataChange={async (data) => {
                                    newData.one = data
                                    await props.onPolymerParametersChange(newData)
                                }}/>
        <AtifInputPolymerDataUI polymerData={props.polymerParameters.two}
                                onPolymerDataChange={async (data) => {
                                    newData.two = data
                                    await props.onPolymerParametersChange(newData)
                                }}/>
    </div>
}
