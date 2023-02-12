// /*****Set valency. Salt(positive : negative); counterion(positive : negative)*****/
export class AtifValencyParameters {

  public salt_positive = 0
  public salt_negative = 0
  public counterion_positive = 0
  public counterion_negative = 0

  constructor(data: AtifValencyParameters | null = null) {
    if (data == null) {
      return
    }

    Object.assign(this, data)
  }

// VALENCY:
// 1 : -1; 1 : -1
  public toString(): string {
    return `
VALENCY:
${this.salt_positive} : ${this.salt_negative}; ${this.counterion_positive} : ${this.counterion_negative}
`
  }
}
