import React from 'react';
import {TextField} from "@mui/material";
import {ipcRenderer} from 'electron';
import {globalEvents} from "../../events";
// import {dialog} from "@electron/remote";

// work around method: https://github.com/electron/remote/issues/91
// const dialog: Electron.Dialog = window.require('@electron/remote').dialog

/**
 * 输出文件选择
 * @param props
 * @constructor
 */
export function OutputFileBlock(props: {
    filepath: string, // 当前输入文件的路径
    onFilepathChange(filepath: string): Promise<void> // 选择输出文件之后，更改输出文件路径的回调
}) {
    return <TextField value={props.filepath} label={"数据输出文件"}
                      disabled={true}
                      onClick={async () => {
                          const filepath = await ipcRenderer.invoke(globalEvents.event_dialog_open_save_file)
                          await props.onFilepathChange(filepath)
                      }}
    />

}
