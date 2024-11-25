export const stringReduce = (string: string, length: number) => {
    return string?.length > length ? string?.substring(0, length) + "..." : string
  }