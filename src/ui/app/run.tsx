import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {getBrowserLogger} from "../../log/browser";


// App 展示组件
function RunComponent() {
    const log = getBrowserLogger("app:run")
    log.debug("app start")


    return <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1em"}}>
        hello
    </div>
}

const root = createRoot(document.querySelector("#root"));

root.render(<RunComponent/>)
