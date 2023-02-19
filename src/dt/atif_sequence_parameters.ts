/**
 * Sequence. 1st line: monomer # of each block of poly-1: mb1[]; 2nd line for poly-2
: mb2[]; 3rd line: valency of each block of poly-1: z1[]; 4th line for poly-2: z2[]
 */
export class AtifSequenceParameters {
  public block_monomer_number1: number[] = []
  public block_monomer_number2: number[] = []
  public block_valency1: number[] = []
  public block_valency2: number[] = []

  constructor(data: AtifSequenceParameters | null = null) {
    if (data == null) {
      return
    }
    Object.assign(this, data)
  }

  public toString(): string {
    return `
SEQUENCE:
${this.block_monomer_number1.join(" ")}
${this.block_monomer_number2.join(" ")}
${this.block_valency1.join(" ")}
${this.block_valency2.join(" ")}
`
  }
}
