import React from 'react';
import {TextField} from "@mui/material";
import {dialog} from "@electron/remote";

export function OutputFileBlock(props: {
    filepath: string,
    onFilepathChange(filepath: string): Promise<void>
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
