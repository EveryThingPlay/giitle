import { github } from "../axios/github"
import type { Repo } from "../types"

export async function search(body:Repo.SearchBody){
  const response = await github.get<Repo.SearchResponse>("/search/repositories", {
    params: body
  })
  return response.data
}