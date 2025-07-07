// app/api/commits/route.ts
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const owner = searchParams.get("owner")
  const repo = searchParams.get("repo")

  console.log("API/COMMITS route: ", owner, repo)

  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  })

  const link = res.headers.get("Link")
  console.log("GitHub Link Header:", link)

  const match = link?.match(/&page=(\d+)>; rel="last"/)
  const count = match ? parseInt(match[1], 10) : 1

  return NextResponse.json({ count })
}