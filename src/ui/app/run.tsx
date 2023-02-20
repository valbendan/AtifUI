import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {getBrowserLogger} from "../../log/browser";
import {ipcRenderer} from "electron";

// App 展示组件
function RunComponent() {
    const log = getBrowserLogger("app:run")
    log.debug("app start")

    const [stdout, setStdout] = useState<string>("")
    const [stderr, setStderr] = useState<string>("")
    const [exitCode, setExitCode] = useState<number>(null)

    ipcRenderer.on('stdout', async (ev, msg) => {
        setStdout(`${stdout}${msg}\n`)
        console.log("render stdout", msg)
    })
    ipcRenderer.on('stderr', async (ev, msg) => {
        setStderr(`${stderr}${msg}\n`)
        console.log("render stderr", msg)
    })
    ipcRenderer.on('code', async (ev, code) => {
        setExitCode(code)
        console.log("render code", code)
    })

    return <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1em"}}>
        <pre>
{stdout}
{stderr}
{exitCode}
        </pre>
    </div>
}

const root = createRoot(document.querySelector("#root"));

root.render(<RunComponent/>)
