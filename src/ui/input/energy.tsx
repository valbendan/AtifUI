import React from "react";
import { TextField } from "@mui/material";

import { doParseFloatValue } from "../utils/values";
import { AtifEnergyParameters } from "../../dt/atif_energy_parameters";
import { MultiNumberValueTextField } from "../blocks/m_values";

export function AtifInputEnergyUI(props: {
    energyParameters: AtifEnergyParameters
    blockNumber: number
    onEnergyParametersChange: (parameter: AtifEnergyParameters) => Promise<void>
}) {
    const newData = new AtifEnergyParameters(structuredClone(props.energyParameters))

    const blockNumberPlus4 = props.blockNumber + 4

    const helperText = "space error"


    return <div>
        <MultiNumberValueTextField
            error={props.energyParameters.pw_positive_salt.length != blockNumberPlus4}
            helperText={helperText}
            label={"pw_positive_salt"}
            onMValuesChange={async (mValues) => {
                newData.pw_positive_salt = mValues
                await props.onEnergyParametersChange(newData)
            }} />

        <MultiNumberValueTextField
            error={props.energyParameters.pw_negative_salt.length != blockNumberPlus4}
            helperText={helperText}
            label={"pw_negative_salt"}
            onMValuesChange={async (mValues) => {
                newData.pw_negative_salt = mValues
                await props.onEnergyParametersChange(newData)
            }} />

        <MultiNumberValueTextField
            error={props.energyParameters.pw_positive_counterions.length != blockNumberPlus4}
            helperText={helperText}
            label={"pw_positive_counterions"}
            onMValuesChange={async (mValues) => {
                newData.pw_positive_counterions = mValues
                await props.onEnergyParametersChange(newData)
            }} />

        <MultiNumberValueTextField
            error={props.energyParameters.pw_negative_counterions.length != blockNumberPlus4}
            helperText={helperText}
            label={"pw_negative_counterions"}
            onMValuesChange={async (mValues) => {
                newData.pw_negative_counterions = mValues
                await props.onEnergyParametersChange(newData)
            }} />
    </div>
}
