// /**Set pairwise interaction (kBT): monomers; positive salt; negative salt; positive
// counterions; negative counterions*****/
export class AtifEnergyParameters {

  public positive_salt = 0
  public negative_salt = 0
  public positive_counterions = 0
  public negative_counterions = 0

  constructor(data: AtifEnergyParameters | null = null) {
    if (data == null) {
      return
    }
    Object.assign(this, data)
  }

// ENERGY:
// 0.0; 0.0
// 0.0; 0.0
  public toString(): string {
    return `
ENERGY:
${this.positive_salt}; ${this.negative_salt}
${this.positive_counterions}; ${this.negative_counterions}
`
  }
}
