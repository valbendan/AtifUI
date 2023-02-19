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
    const length = this.pw_positive_salt.length

    const metrix: number[][] = []

    for (let i = 0; i < length; i++) {
      metrix[i] = new Array(length).fill(0);

      for (let j = 0; j < length - 4; j++) {
        const subValue = this.pw_block_number[i] || new Array(length).fill(0)
        metrix[i][j] = subValue[j] || 0
      }
      metrix[i][length - 4 - 1 + 1] = this.pw_positive_salt[i] || 0
      metrix[i][length - 4 - 1 + 2] = this.pw_negative_salt[i] || 0
      metrix[i][length - 4 - 1 + 3] = this.pw_positive_counterions[i] || 0
      metrix[i][length - 4 - 1 + 4] = this.pw_negative_counterions[i] || 0
    }

    return `
ENERGY:
` + metrix.map((aList): string => {
      return aList.join("; ")
    }).join("\n")
  }
}
