import React from "react";
import { AtifSequenceParameters } from "../../dt/atif_sequence_parameters";
import { MultiNumberValueTextField } from "../blocks/m_values";

export function AtifInputSequenceUI(props: {
    sequenceParameters: AtifSequenceParameters
    blockNumber: number
    onSequenceParametersChange: (parameter: AtifSequenceParameters) => Promise<void>
}) {
    const newData = new AtifSequenceParameters(structuredClone(props.sequenceParameters))

    const errorMsg = "sequence number is wrong[should equal to AtifPolymerParameters xxx]"

    return <div>
        <MultiNumberValueTextField
            label={"block_monomer_number1"}
            helperText={errorMsg}
            error={props.sequenceParameters.block_monomer_number1.length != props.blockNumber}
            onMValuesChange={async (values) => {
                newData.block_monomer_number1 = values
                await props.onSequenceParametersChange(newData)
            }} />

        <MultiNumberValueTextField
            label={"block_monomer_number2"}
            helperText={errorMsg}
            error={props.sequenceParameters.block_monomer_number2.length != props.blockNumber}
            onMValuesChange={async (values) => {
                newData.block_monomer_number2 = values
                await props.onSequenceParametersChange(newData)
            }} />

        <MultiNumberValueTextField
            label={"block_valency1"}
            helperText={errorMsg}
            error={props.sequenceParameters.block_valency1.length != props.blockNumber}
            onMValuesChange={async (values) => {
                newData.block_valency1 = values
                await props.onSequenceParametersChange(newData)
            }} />

        <MultiNumberValueTextField
            label={"block_valency2"}
            helperText={errorMsg}
            error={props.sequenceParameters.block_valency2.length != props.blockNumber}
            onMValuesChange={async (values) => {
                newData.block_valency2 = values
                await props.onSequenceParametersChange(newData)
            }} />
    </div>
}
