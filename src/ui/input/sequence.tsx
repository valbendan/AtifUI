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
            label={"monomer1"}
            onMValuesChange={async (values) => {
                newData.monomer1 = values
                await props.onSequenceParametersChange(newData)
            }}/>

        <MultiNumberValueTextField
            label={"monomer2"}
            onMValuesChange={async (values) => {
                newData.monomer2 = values
                await props.onSequenceParametersChange(newData)
            }}/>

        <MultiNumberValueTextField
            label={"valency1"}
            onMValuesChange={async (values) => {
                newData.valency1 = values
                await props.onSequenceParametersChange(newData)
            }}/>

        <MultiNumberValueTextField
            label={"valency2"}
            onMValuesChange={async (values) => {
                newData.valency2 = values
                await props.onSequenceParametersChange(newData)
            }}/>
    </div>
}
