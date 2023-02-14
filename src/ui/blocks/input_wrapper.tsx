import React, {ReactNode} from 'react';
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

/**
 * 输入参数 Accordion 的装饰器
 * @param props
 * @constructor
 */
export function InputWrapperBlock(props: { name: string, innerUI: ReactNode }) {
    return <Accordion>
        <AccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}>
            {props.name}
        </AccordionSummary>
        <AccordionDetails>
            {props.innerUI}
        </AccordionDetails>
    </Accordion>
}
