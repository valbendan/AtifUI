import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {getBrowserLogger} from "../log/browser";
import {AtifInputMethodUI} from "./input/method";
import {AtifMethodParameters} from "../dt/atif_method_parameters";
import {AtifInputPolymerUI} from "./input/polymer";
import {AtifPolymerParameters} from "../dt/atif_polymer_parameters";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import {AtifInputSequenceUI} from "./input/sequence";
import {AtifSequenceParameters} from "../dt/atif_sequence_parameters";
import {AtifSizeParameters} from "../dt/atif_size_parameters";
import {AtifInputSizeUI} from "./input/size";
import {AtifSaltParameters} from "../dt/atif_salt_parameters";
import {AtifInputSaltUI} from "./input/salt";
import {AtifWallParameters} from "../dt/atif_wall_parameters";
import {AtifInputWallUI} from "./input/wall";
import {AtifEnergyParameters} from "../dt/atif_energy_parameters";
import {AtifInputEnergyUI} from "./input/energy";
import {AtifValencyParameters} from "../dt/atif_valency_parameters";
import {AtifInputValencyUI} from "./input/valency";
import {AtifDiameterParameters} from "../dt/atif_diameter_parameters";
import {AtifInputDiameterUI} from "./input/diameter";
import {AtifPermitemlenParameters} from "../dt/atif_permitemlen_parameters";
import {AtifInputPermitemUI} from "./input/permitemlen";
import {AtifIterativeParameters} from "../dt/atif_iterative_parameters";
import {AtifInputIterativeUI} from "./input/iterative";
import {AtifRunParameters} from "../dt/atif_run_parameters";
import {Accordion, AccordionDetails, AccordionSummary, TextField} from "@mui/material";


// App 展示组件
function AppComponent() {
    const log = getBrowserLogger("root")
    log.debug("app start")

    const [methodParameters, setMethodParameters] = useState<AtifMethodParameters>(new AtifMethodParameters())
    const [polymerParameters, setPolymerParameters] = useState<AtifPolymerParameters>(new AtifPolymerParameters())
    const [sequenceParameters, setSequenceParameters] = useState<AtifSequenceParameters>(new AtifSequenceParameters())
    const [sizeParameters, setSizeParameters] = useState<AtifSizeParameters>(new AtifSizeParameters())
    const [saltParameters, setSaltParameters] = useState<AtifSaltParameters>(new AtifSaltParameters())
    const [wallParameters, setWallParameters] = useState<AtifWallParameters>(new AtifWallParameters())
    const [energyParameters, setEnergyParameters] = useState<AtifEnergyParameters>(new AtifEnergyParameters())
    const [valencyParameters, setValencyParameters] = useState<AtifValencyParameters>(new AtifValencyParameters())
    const [diameterParameters, setDiameterParameters] = useState<AtifDiameterParameters>(new AtifDiameterParameters())
    const [permitemlenParameters, setPermitemlenParameters] = useState<AtifPermitemlenParameters>(new AtifPermitemlenParameters())
    const [iterativeParameters, setIterativeParameters] = useState<AtifIterativeParameters>(new AtifIterativeParameters())
    const [filepath, setFilepath] = useState("")

    const run = new AtifRunParameters()

    run.methodParameter = methodParameters
    run.polymerParameter = polymerParameters
    run.sequenceParameters = sequenceParameters
    run.sizeParameters = sizeParameters
    run.saltParameters = saltParameters
    run.wallParameters = wallParameters
    run.energyParameters = energyParameters
    run.valencyParameters = valencyParameters
    run.diameterParameters = diameterParameters
    run.permitemlenParameters = permitemlenParameters
    run.iterativeParameters = iterativeParameters
    run.filepath = filepath


    return <div>
        <Accordion>
            <AccordionSummary
                expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}>Method</AccordionSummary>
            <AccordionDetails>
                <AtifInputMethodUI methodParameters={methodParameters}
                                   onMethodParameterChange={async (data) => {
                                       setMethodParameters(new AtifMethodParameters(data))
                                   }}/>
            </AccordionDetails>
        </Accordion>
        <AtifInputPolymerUI polymerParameters={polymerParameters}
                            onPolymerParametersChange={async (data) => {
                                setPolymerParameters(new AtifPolymerParameters(data))
                            }}/>
        <AtifInputSequenceUI sequenceParameters={sequenceParameters}
                             onSequenceParametersChange={async (data) => {
                                 setSequenceParameters(new AtifSequenceParameters(data))
                             }}/>
        <AtifInputSizeUI sizeParameters={sizeParameters}
                         onSizeParametersChange={async (data) => {
                             setSizeParameters(new AtifSizeParameters(data))
                         }}/>
        <AtifInputSaltUI saltParameters={saltParameters}
                         onSaltParametersChange={async (data) => {
                             setSaltParameters(new AtifSaltParameters(data))
                         }}/>
        <AtifInputWallUI wallParameters={wallParameters}
                         onWallParametersChange={async (data) => {
                             setWallParameters(new AtifWallParameters(data))
                         }}/>
        <AtifInputEnergyUI energyParameters={energyParameters}
                           onEnergyParametersChange={async (data) => {
                               setEnergyParameters(new AtifEnergyParameters(data))
                           }}/>
        <AtifInputValencyUI valencyParameters={valencyParameters}
                            onValencyParametersChange={async (data) => {
                                setValencyParameters(new AtifValencyParameters(data))
                            }}/>
        <AtifInputDiameterUI diameterParameters={diameterParameters}
                             onDiameterParametersChange={async (data) => {
                                 setDiameterParameters(new AtifDiameterParameters(data))
                             }}/>
        <AtifInputPermitemUI permitemlenParameters={permitemlenParameters}
                             onPermitemParametersChange={async (data) => {
                                 setPermitemlenParameters(new AtifPermitemlenParameters(data))
                             }}/>
        <AtifInputIterativeUI iterativeParameters={iterativeParameters}
                              onIterativeParametersChange={async (data) => {
                                  setIterativeParameters(new AtifIterativeParameters(data))
                              }}/>

        <TextField value={filepath} type={"file"} label={"数据输出文件"}
                   onChange={(event) => {
                       setFilepath(event.target.value)
                   }}/>

        <pre>{run.toString()}</pre>
    </div>
}

const root = createRoot(document.querySelector("#root"));

root.render(<AppComponent/>)
