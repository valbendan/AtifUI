import React from "react";
import { TextField, TextareaAutosize, TextareaAutosizeProps } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField/TextField";


export function MatrixNumberValueTextField(props: {
    onMatrixValuesChange: (values: number[][]) => Promise<void>,
} & TextFieldProps) {
    return <TextField   {...props}
        rows={2}
        multiline={true}
        value={props.value}
        onChange={async (event) => {
            const mValues = doParseLineNumber(event.target.value)
            if (mValues.length > 0) {
                await props.onMatrixValuesChange(mValues)
            }
        }} />
}

export function MultiNumberValueTextField(props: {
    onMValuesChange: (values: number[]) => Promise<void>,
} & TextFieldProps) {
    return <TextField {...props}
        label={props.label}
        value={props.value}
        onChange={async (event) => {
            const mValues = doParseNumber(event.target.value)
            if (mValues.length > 0) {
                await props.onMValuesChange(mValues)
            }
        }} />
}

function doParseNumber(s: string): number[] {
    const v = s.trim()
    if (v.length === 0) {
        return []
    }
    const parts = s.split(",")

    let error = false
    const ret = parts.map((n): number => {
        const v = parseFloat(n.trim())
        if (isNaN(v)) {
            error = true
        }
        return v
    })
    if (error) {
        return []
    } else {
        return ret
    }
}

function doParseLineNumber(s: string): number[][] {
    const lines = s.split("\n")
    return lines.map((line): number[] => {
        return doParseNumber(line)
    })
}