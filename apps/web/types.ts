export type Member = {
  position: { positionCategory: string }
  name: string
}

export type ProblemType = {
  _id: string
  name: string,
  url: string,
  difficulty: string,
  solutionURL: string
}
