import React, { ReactNode } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

/**
 * 输入参数 Accordion 的装饰器
 * @param props
 * @constructor
 */
export function InputWrapperBlock(props: { name: string, innerUI: ReactNode, subTitle?: string }) {
    return <Accordion>
        <AccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}>
            <div>
                <div>
                    <Typography>{props.name}</Typography>
                </div>
                <div>
                    <Typography fontSize={"0.8rem"}>{props.subTitle}</Typography>
                </div>
            </div>

        </AccordionSummary>
        <AccordionDetails>
            {props.innerUI}
        </AccordionDetails>
    </Accordion>
}
