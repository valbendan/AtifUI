import {AtifPolymerParameters} from "./atif_polymer_parameters";
import {AtifSequenceParameters} from "./atif_sequence_parameters";
import {AtifSizeParameters} from "./atif_size_parameters";
import {AtifMethodParameters} from "./atif_method_parameters";
import {AtifSaltParameters} from "./atif_salt_parameters";
import {AtifWallParameters} from "./atif_wall_parameters";
import {AtifEnergyParameters} from "./atif_energy_parameters";
import {AtifValencyParameters} from "./atif_valency_parameters";
import {AtifDiameterParameters} from "./atif_diameter_parameters";
import {AtifPermitemlenParameters} from "./atif_permitemlen_parameters";
import {AtifIterativeParameters} from "./atif_iterative_parameters";


/**
 * Atif 运行时的参数
 */
export class AtifRunParameters {
  public methodParameter: AtifMethodParameters = new AtifMethodParameters()
  public polymerParameter: AtifPolymerParameters = new AtifPolymerParameters()
  public sequenceParameters: AtifSequenceParameters = new AtifSequenceParameters()
  public sizeParameters: AtifSizeParameters = new AtifSizeParameters()
  public saltParameters: AtifSaltParameters = new AtifSaltParameters()
  public wallParameters: AtifWallParameters = new AtifWallParameters()
  public energyParameters: AtifEnergyParameters = new AtifEnergyParameters()
  public valencyParameters: AtifValencyParameters = new AtifValencyParameters()
  public diameterParameters: AtifDiameterParameters = new AtifDiameterParameters()
  public permitemlenParameters: AtifPermitemlenParameters = new AtifPermitemlenParameters()
  public iterativeParameters: AtifIterativeParameters = new AtifIterativeParameters()
  public filepath = ""

  constructor(data: AtifRunParameters | null) {
    if (data == null) {
      return
    }

    this.methodParameter = new AtifMethodParameters(data.methodParameter)
    this.polymerParameter = new AtifPolymerParameters(data.polymerParameter)
    this.sequenceParameters = new AtifSequenceParameters(data.sequenceParameters)
    this.sizeParameters = new AtifSizeParameters(data.sizeParameters)
    this.saltParameters = new AtifSaltParameters(data.saltParameters)
    this.wallParameters = new AtifWallParameters(data.wallParameters)
    this.energyParameters = new AtifEnergyParameters(data.energyParameters)
    this.valencyParameters = new AtifValencyParameters(data.valencyParameters)
    this.diameterParameters = new AtifDiameterParameters(data.diameterParameters)
    this.permitemlenParameters = new AtifPermitemlenParameters(data.permitemlenParameters)
    this.iterativeParameters = new AtifIterativeParameters(data.iterativeParameters)
    this.filepath = data.filepath || ""
  }

  /**
   * 生成运行时的配置文件
   *
   * 注意: 顺序是很重要的
   */
  public toString(): string {
    return [
      this.methodParameter.toString(),
      this.polymerParameter.toString(),
      this.sequenceParameters.toString(),
      this.sizeParameters.toString(),
      this.saltParameters.toString(),
      this.wallParameters.toString(),
      this.energyParameters.toString(),
      this.valencyParameters.toString(),
      this.diameterParameters.toString(),
      this.permitemlenParameters.toString(),
      this.iterativeParameters.toString(),
      `FILEPATH:
${this.filepath}
`
    ].join("\n")
  }
}
