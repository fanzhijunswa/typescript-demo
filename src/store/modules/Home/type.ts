interface HomeListSchema {
  readonly id: number
  value: string
}

export default interface HomeState {
  homeName: string
  homeSex: string
  homeList: HomeListSchema[]
}