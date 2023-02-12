// /******Iterative parameters. maximum iteration #: maxItera; Picard mixture: mixCoe;
// Charging step: cstep; Guess surface potential: phL_L; Error tolerance: errTol*****/
// ITERATIVE:
// 1E5; 0.001; 1; 0.0; 1.0E-7
export class AtifIterativeParameters {
  public max_itera = 0
  public mix_coe = 0
  public cstep = 0
  public phL_L = 0
  public err_tol = 0

  constructor(data: AtifIterativeParameters | null = null) {
    if (data == null) {
      return
    }
    Object.assign(this, data)
  }

  public toString(): string {
    return `
ITERATIVE:
${this.max_itera}; ${this.mix_coe}; ${this.cstep}; ${this.phL_L}; ${this.err_tol}
`
  }
}
