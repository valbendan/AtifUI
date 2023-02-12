export class AtifSizeParameters {
  public box_size = 0
  public step_length = 0

  constructor(data: AtifSizeParameters | null = null) {
    if (data == null) {
      return
    }
    Object.assign(this, data)
  }

  public toString(): string {
    return `
SIZE:
${this.box_size}; ${this.step_length}
`
  }
}
