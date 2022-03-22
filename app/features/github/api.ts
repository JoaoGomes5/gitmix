import invariant from "tiny-invariant"


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

