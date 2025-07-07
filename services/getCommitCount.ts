// lib/github/getCommitCount.ts
export async function getCommitCount(owner: string, repo: string): Promise<number | null> {
  try {
    const res = await fetch(`/api?owner=${owner}&repo=${repo}`)
    const data = await res.json()
    console.log("API RESPONSE:", data)
    return data.count ?? null
  } catch (err) {
    console.error("Erro ao buscar commits:", err)
    return null
  }
}
