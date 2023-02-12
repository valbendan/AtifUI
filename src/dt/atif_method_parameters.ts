export class AtifMethodParameters {
  public method: 'DFT' | 'SCFT' | string
  public geometry: 'Planar' | 'Spherical' | 'Cylindrical' | string
  public surface: 'Single' | 'Two' | string
  // the model of short-range external potential: LJ(Lenard-Jones)/SW(Square-well) potential
  public srep: 'LJ' | 'SW' | string
  // Charge shell model: 0<=B<=A<=1 (B&A: parameters in charge shell model)
  //                           a       b
  public charge_shell_model: [number, number]

  constructor(data: AtifMethodParameters | null = null) {
    this.method = 'DFT'
    this.geometry = 'Planar'
    this.surface = 'Single'
    this.srep = 'LJ'
    this.charge_shell_model = [0, 0]
    if (data != null) {
      Object.assign(this, data)
    }
  }

  public toString(): string {
    return `METHOD:
${this.method}; ${this.geometry}; ${this.surface}; ${this.srep}; ${this.charge_shell_model[0]}, ${this.charge_shell_model[1]}
`
  }
}
