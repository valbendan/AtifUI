import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {getBrowserLogger} from "../../log/browser";


// App 展示组件
function RunComponent() {
    const log = getBrowserLogger("app:run")
    log.debug("app start")

    const [stdout, setStdout] = useState<string>("")
    const [stderr, setStderr] = useState<string>("")
    const [exitCode, setExitCode] = useState<number>(null)

    useEffect(() => {
        window.addEventListener('stdout', async (ev) => {
            console.log("stdout", ev)
        })
        window.addEventListener('stderr', async (ev) => {
            console.log("stderr", ev)
        })
        window.addEventListener('code', async (ev) => {
            console.log("code", ev)
        })
    })

    return <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1em"}}>
        <pre>{stdout}</pre>
        <pre>{stderr}</pre>
        <pre>{exitCode}</pre>
    </div>
}

const root = createRoot(document.querySelector("#root"));

root.render(<RunComponent/>)
