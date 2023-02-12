// /***Salt concentration [M] and total volume fraction (for incompressible system)**/
// SALT_HS:
// 0.0; 0.74
export class AtifSaltParameters {

  public M = 0
  public volume = 0

  constructor(data: AtifSaltParameters | null = null) {
    if (data != null) {
      Object.assign(this, data)
    }
  }

  public toString(): string {
    return `
SALT_HS:
${this.M}; ${this.volume}
`
  }

}
