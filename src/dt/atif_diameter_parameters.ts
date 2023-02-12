// /**********Set diameters (unit: see below). Monomers; positive salt; negative salt;
// positive counterion; negative counterion; hard sphere solvent********************/
export class AtifDiameterParameters {
  public monomers = 0
  public positive_salt = 0
  public negative_salt = 0
  public positive_counterion = 0
  public negative_counterion = 0
  public hard_sphere_solvent = 0

  constructor(data: AtifDiameterParameters | null = null) {
    if (data == null) {
      return
    }
    Object.assign(this, data)
  }

// DIAMETER:
// 1.0; 1.0; 1.0; 1.0; 1.0; 1.0
  public toString(): string {
    return `
DIAMETER:
${this.monomers}; ${this.positive_salt}; ${this.negative_salt}; ${this.positive_counterion}; ${this.negative_counterion}; ${this.hard_sphere_solvent}
`
  }
}
