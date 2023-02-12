//
// Polymer 1(poly-1):
// monomer concentration [M]: rhopm1, polymerization:
// mp1, # of blocks: nb1, Chain Model, Bending potential; Poly-2: similar with poly-1/
// POLYMER:
// 0.1, 40, 1, Flexible, 0; 0.0, 0, 0, Flexible, 0
export class AtifPolymerData {
  public mp = 0
  public nb_blocks = 0
  public grafting_density = 0
  public monomer_density = 0
  public chain_model = ""

  constructor(data: AtifPolymerData | null) {
    if (data == null) {
      return
    }
    Object.assign(this, data)
  }

  // todo 修正格式化参数
  public toString(): string {
    return `${this.chain_model} ${this.mp} ${this.nb_blocks} ${this.grafting_density} ${this.monomer_density}`
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
