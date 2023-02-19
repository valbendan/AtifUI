import React from "react";
import { TextField, Autocomplete, Typography } from "@mui/material";
import { AtifPolymerData, AtifPolymerParameters } from "../../dt/atif_polymer_parameters";
import { doParseFloatValue } from "../utils/values";


function AtifInputPolymerDataUI(props: {
    polymerData: AtifPolymerData,
    onPolymerDataChange: (data: AtifPolymerData) => Promise<void>
}) {
    const newData = new AtifPolymerData(structuredClone(props.polymerData))
    return <div>
        <TextField type={"number"}
            label={"monomer_concentration"}
            value={props.polymerData.monomer_concentration}
            onChange={async (event) => {
                newData.monomer_concentration = doParseFloatValue(event.target.value, props.polymerData.monomer_concentration)
                await props.onPolymerDataChange(newData)
            }} />

        <TextField type={"number"}
            label={"polymerization"}
            value={props.polymerData.polymerization}
            onChange={async (event) => {
                newData.polymerization = doParseFloatValue(event.target.value, props.polymerData.polymerization)
                await props.onPolymerDataChange(newData)
            }} />

        <TextField type={"number"}
            label={"block_number"}
            value={props.polymerData.block_number}
            onChange={async (event) => {
                newData.block_number = doParseFloatValue(event.target.value, props.polymerData.block_number)
                await props.onPolymerDataChange(newData)
            }} />

        <TextField label={"chain_model"}
            value={props.polymerData.chain_model}
            onChange={async (event) => {
                newData.chain_model = event.target.value
                await props.onPolymerDataChange(newData)
            }} />

        <TextField type={"number"}
            label={"bending_potential"}
            helperText={"bending potential parameter"}
            value={props.polymerData.bending_potential}
            onChange={async (event) => {
                newData.bending_potential = doParseFloatValue(event.target.value, props.polymerData.bending_potential)
                await props.onPolymerDataChange(newData)
            }} />
    </div>
}

export function AtifInputPolymerUI(props: {
    polymerParameters: AtifPolymerParameters
    onPolymerParametersChange: (parameter: AtifPolymerParameters) => Promise<void>
}) {
    const newData = structuredClone(props.polymerParameters)

    return <div>
        <Typography variant={"h5"} padding={"1em"}>Polymer species 1:</Typography>

        <AtifInputPolymerDataUI polymerData={props.polymerParameters.one}
            onPolymerDataChange={async (data) => {
                newData.one = data
                await props.onPolymerParametersChange(newData)
            }} />

        <Typography variant={"h5"} padding={"1em"}>Polymer species 2:</Typography>

        <AtifInputPolymerDataUI polymerData={props.polymerParameters.two}
            onPolymerDataChange={async (data) => {
                newData.two = data
                await props.onPolymerParametersChange(newData)
            }} />
    </div>
}
