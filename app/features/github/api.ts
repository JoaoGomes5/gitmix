import invariant from "tiny-invariant"
import { Repo } from "./types"


export const getGithubUser = async (username?: string) => {
  invariant(username, 'Please provide an username as an string')

  const res = await fetch(`https:/api.github.com/users/${username}`, {
    headers: {
      accept: 'application/vnd.github.v3+json',
      Authorization: 'token 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'
    }
  })
  const { login, avatar_url, html_url , bio} = await res.json()
  
  return{ login, avatar_url, html_url , bio }
  
} 

export const getUserRepos = async (username?: string) => {
  invariant(username, 'Please provide an username as an string')

  const res = await fetch(`https:/api.github.com/users/${username}/repos`, {
    headers: {
      accept: 'application/vnd.github.v3+json',
      Authorization: 'token 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'
    }
  })

  return (await res.json()).map(
    ({ id, full_name, stargazers_count, html_url, language, name }: Repo) => ({
      id,
      full_name,
      stargazers_count,
      html_url,
      language,
      name,
    })
  );

}

