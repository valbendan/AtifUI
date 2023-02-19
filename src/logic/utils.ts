import {app} from 'electron';
import * as process from 'process';
import * as path from "path";
import * as os from "os";


/**
 * 获取 Atif 在各个系统上的命令行名称
 */
function findAtifBinName(): string {
  switch (os.platform()) {
    case "darwin":
      return "Atif.macOS"
    case "win32":
      return "Atif.exe"
    default:
      return "Atif"
  }
}

/**
 * 获取 atif 软件的全路径
 */
export function findAtifBinPath(): string {
  const binName = findAtifBinName()

  let binPath = ""
  if (app.isPackaged) {
    binPath = path.join(process.resourcesPath, "bin", binName)
  } else {
    binPath = path.join(app.getAppPath(), "bin", binName)
  }

  console.log("Atif Bin Path:", binPath)
  return binPath
}
