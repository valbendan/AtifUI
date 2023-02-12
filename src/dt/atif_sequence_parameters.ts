export class AtifSequenceParameters {
  public monomer1: number[] = []
  public monomer2: number[] = []
  public valency1: number[] = []
  public valency2: number[] = []

  constructor(data: AtifSequenceParameters | null = null) {
    if (data == null) {
      return
    }
    Object.assign(this, data)
  }

  public toString(): string {
    return `
SEQUENCE:
${this.monomer1.join(" ")}
${this.monomer2.join(" ")}
${this.valency1.join(" ")}
${this.valency2.join(" ")}
`
  }
}
