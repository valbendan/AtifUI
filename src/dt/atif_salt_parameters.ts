// /***Salt concentration [M] and total volume fraction (for incompressible system)**/
// SALT_HS:
// 0.0; 0.74
export class AtifSaltParameters {

  public salt_concentration = 0
  public volume_fraction = 0

  constructor(data: AtifSaltParameters | null = null) {
    if (data != null) {
      Object.assign(this, data)
    }
  }

  public toString(): string {
    return `
SALT_HS:
${this.salt_concentration}; ${this.volume_fraction}
`
  }

}
