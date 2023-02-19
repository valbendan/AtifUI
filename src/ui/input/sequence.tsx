import React from "react";
import {AtifSequenceParameters} from "../../dt/atif_sequence_parameters";
import {MultiNumberValueTextField} from "../blocks/m_values";

export function AtifInputSequenceUI(props: {
    sequenceParameters: AtifSequenceParameters
    onSequenceParametersChange: (parameter: AtifSequenceParameters) => Promise<void>
}) {
    const newData = new AtifSequenceParameters(structuredClone(props.sequenceParameters))

    return <div>
        <MultiNumberValueTextField
            label={"block_monomer_number1"}
            onMValuesChange={async (values) => {
                newData.block_monomer_number1 = values
                await props.onSequenceParametersChange(newData)
            }}/>

        <MultiNumberValueTextField
            label={"block_monomer_number2"}
            onMValuesChange={async (values) => {
                newData.block_monomer_number2 = values
                await props.onSequenceParametersChange(newData)
            }}/>

        <MultiNumberValueTextField
            label={"block_valency1"}
            onMValuesChange={async (values) => {
                newData.block_valency1 = values
                await props.onSequenceParametersChange(newData)
            }}/>

        <MultiNumberValueTextField
            label={"block_valency2"}
            onMValuesChange={async (values) => {
                newData.block_valency2 = values
                await props.onSequenceParametersChange(newData)
            }}/>
    </div>
}
