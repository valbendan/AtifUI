import {AtifRunParameters} from "../dt/atif_run_parameters";
import {spawn} from "child_process";
import {findAtifBinPath} from "./utils";


/**
 * 运行指定配置
 */
export class RunLogic {
  private parameters: AtifRunParameters

  private readonly stdoutCallback: (chunk: string) => Promise<void>
  private readonly stderrCallback: (chunk: string) => Promise<void>
  private readonly doneCallback: (code: number) => Promise<void>

  constructor(
    parameter: AtifRunParameters,
    stdoutCallback: (chunk: string) => Promise<void>,
    stderrCallback: (chunk: string) => Promise<void>,
    doneCallback: (code: number) => Promise<void>
  ) {
    this.parameters = parameter
    this.stdoutCallback = stdoutCallback
    this.stderrCallback = stderrCallback
    this.doneCallback = doneCallback
  }


  /**
   * 开始运行
   */
  doRun() {
    const atif = spawn(findAtifBinPath())

    atif.stdin.write(this.parameters.toString() + "\n")

    atif.stdout.setEncoding('utf8');
    atif.stdout.on('data', async (chunk) => {
      console.log("stdout", chunk)
      await this.stdoutCallback(chunk)
    })

    atif.stderr.setEncoding('utf8');
    atif.stderr.on('data', async (chunk) => {
      console.log("stderr", chunk)
      await this.stderrCallback(chunk)
    })

    atif.on('exit', async (code, signal) => {
      console.log("exit", code)
      await this.doneCallback(code)
    })
  }
}
