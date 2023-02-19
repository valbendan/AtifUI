// /**********Set diameters (unit: see below). Monomers; positive salt; negative salt;
// positive counterion; negative counterion; hard sphere solvent********************/
export class AtifDiameterParameters {
  public diameter_block_number: number[] = [] // UI 需要更新，判断数据是否足够的逻辑【 AtifPolymerParameters 中 Data block_number 的和 参数判断】

  public diameter_positive_salt = 0
  public diameter_negative_salt = 0
  public diameter_positive_counterion = 0
  public diameter_negative_counterion = 0
  public diameter_solvent = 0

  constructor(data: AtifDiameterParameters | null = null) {
    if (data == null) {
      return
    }
    Object.assign(this, data)
  }

// DIAMETER:
// 1.0; 1.0; 1.0; 1.0; 1.0; 1.0
  public toString(): string {
    return `
DIAMETER:
${this.diameter_block_number.join("; ")}; ${this.diameter_positive_salt}; ${this.diameter_negative_salt}; ${this.diameter_positive_counterion}; ${this.diameter_negative_counterion}; ${this.diameter_solvent}
`
  }
}
