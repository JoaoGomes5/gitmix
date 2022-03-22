import { Outlet } from 'remix'
import { UserProps } from './types'

export interface GithubContainerProps {
  user: UserProps
}
export function GithubContainer({ user }: GithubContainerProps) {
  return (
    <>
      <h1>{ user.login}</h1> 
      <blockquote>{user.bio}</blockquote>
      <img src={user.avatar_url} alt={user.login} width='150' />

      <hr />

      <Outlet />
    </>
  )
}