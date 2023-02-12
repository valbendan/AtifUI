// /*External potential. Surface charge density: (C/m^2). Short-range force: monomers,
// positive salt, negative salt, positive counterion, negative counterion, solvent***/
// WALL:
// 0.02; 0.0, 0.0, 0.0, 0.0, 0.0, 0.0
export class AtifWallParameters {
  public surface_charge_density = 0
  public monomers = 0
  public positive_salt = 0
  public negative_salt = 0
  public positive_counterion = 0
  public negative_counterion = 0
  public solvent = 0

  constructor(data: AtifWallParameters | null = null) {
    if (data != null) {
      Object.assign(this, data)
    }
  }

// /*External potential. Surface charge density: (C/m^2). Short-range force: monomers,
// positive salt, negative salt, positive counterion, negative counterion, solvent***/
// WALL:
// 0.02; 0.0, 0.0, 0.0, 0.0, 0.0, 0.0
  public toString(): string {
    return `
WALL:
${this.surface_charge_density}; ${this.monomers}, ${this.positive_salt}, ${this.negative_salt}, ${this.positive_counterion}, ${this.negative_counterion}, ${this.solvent}
`
  }
}
