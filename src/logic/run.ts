import {AtifRunParameters} from "../dt/atif_run_parameters";
import {spawn} from "child_process";
import {findAtifBinPath} from "./utils";


/**
 * 运行指定配置
 */
export class RunLogic {
  private parameters: AtifRunParameters

  constructor(parameter: AtifRunParameters) {
    this.parameters = parameter
  }


  /**
   * 开始运行
   */
  doRun() {
    const atif = spawn(findAtifBinPath())

    atif.stdin.write(this.parameters.toString() + "\n")

    atif.stdout.on('data', () => {
      return
    })

    atif.stdout.on('close', () => {
      return
    })

    atif.stderr.on('data', () => {
      return
    })

    atif.on('exit', (code, signal) => {
      return
    })
  }


}
