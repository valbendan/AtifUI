// /*Dielectric constant: solution, surfaces; temperature (K); length unit of system**/
export class AtifPermitemlenParameters {
  public solution = 0
  public surfaces = 0
  public temperature = 0
  public length_unit_of_system = 0

  constructor(data: AtifPermitemlenParameters | null = null) {
    if (data == null) {
      return
    }
    Object.assign(this, data)
  }

// PERMITEMLEN:
// 78.5, 78.5; 298.15; 4.0E-10
  public toString(): string {
    return `
PERMITEMLEN:
${this.solution}, ${this.surfaces}, ${this.temperature}, ${this.length_unit_of_system}
`
  }
}
