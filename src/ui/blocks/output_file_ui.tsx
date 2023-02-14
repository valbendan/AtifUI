import React from 'react';
import {TextField} from "@mui/material";

const dialog = window.require('@electron/remote').dialog

/**
 * 输出文件选择
 * @param props
 * @constructor
 */
export function OutputFileBlock(props: {
    filepath: string, // 当前输入文件的路径
    onFilepathChange(filepath: string): Promise<void> // 选择输出文件之后，更改输出文件路径的回调
}) {
    return <TextField value={props.filepath} type={"file"} label={"数据输出文件"}
                      disabled={true}
                      onClick={async () => {
                          const filepathList = await dialog.showOpenDialog({
                              title: "Save output file to ...",
                              message: "Save compute output file to",
                              properties: ['promptToCreate'],
                              filters: [],
                          })
                          if (filepathList.filePaths.length > 0) {
                              await props.onFilepathChange(filepathList.filePaths[0])
                          }
                      }}
    />

}
