//
// Polymer 1(poly-1):
// monomer concentration [M]: rhopm1, polymerization:
// mp1, # of blocks: nb1, Chain Model, Bending potential; Poly-2: similar with poly-1/
// POLYMER:
// 0.1, 40, 1, Flexible, 0; 0.0, 0, 0, Flexible, 0
export class AtifPolymerData {
  public monomer_concentration = 0
  public polymerization = 0
  public block_number = 0
  public chain_model = ""
  public bending_potential = 0

  constructor(data: AtifPolymerData | null) {
    if (data == null) {
      return
    }
    Object.assign(this, data)
  }

  // todo 修正格式化参数
  public toString(): string {
    return `${this.monomer_concentration} ${this.polymerization} ${this.block_number} ${this.chain_model} ${this.bending_potential}`
  }
}

export class AtifPolymerParameters {
  public one: AtifPolymerData
  public two: AtifPolymerData

  constructor(data: AtifPolymerParameters | null = null) {
    this.one = new AtifPolymerData(data?.one)
    this.two = new AtifPolymerData(data?.two)
  }

  public toString(): string {
    return `
POLYMER:
${this.one.toString()}; ${this.two.toString()}
`
  }
}
