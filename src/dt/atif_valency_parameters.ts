// /*****Set valency. Salt(positive : negative); counterion(positive : negative)*****/
export class AtifValencyParameters {

  public valency_salt_positive = 0
  public valency_salt_negative = 0
  public valency_counterion_positive = 0
  public valency_counterion_negative = 0

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
${this.valency_salt_positive} : ${this.valency_salt_negative}; ${this.valency_counterion_positive} : ${this.valency_counterion_negative}
`
  }
}
