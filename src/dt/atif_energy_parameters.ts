// /**Set pairwise interaction (kBT): monomers; positive salt; negative salt; positive
// counterions; negative counterions*****/
export class AtifEnergyParameters {

  // 重新做【最终生成的是 n*n 的矩阵】
  public pw_block_number: number[][] = [[]] // UI 需要更新，判断数据是否足够的逻辑【 AtifPolymerParameters 中 Data block_number 的和 参数判断】

  public pw_positive_salt: number[] = []
  public pw_negative_salt: number[] = []
  public pw_positive_counterions: number[] = []
  public pw_negative_counterions: number[] = []

  constructor(data: AtifEnergyParameters | null = null) {
    if (data == null) {
      return
    }
    Object.assign(this, data)
  }

  // ENERGY:
  // 0.0; 0.0; 0; 0
  // 0.0; 0.0; 0; 0
  // 0.0; 0.0; 0, 0
  // 0.0; 0.0; 0, 0
  // 输出需要重写
  public toString(): string {
    return `
ENERGY:
${this.pw_positive_salt}; ${this.pw_negative_salt}
${this.pw_positive_counterions}; ${this.pw_negative_counterions}
`
  }
}
