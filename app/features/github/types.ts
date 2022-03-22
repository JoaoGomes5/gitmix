export interface UserProps {
  login: string
  avatar_url: string
  html_url: string
  bio: string
}

export interface LoaderDataProps {
  user: UserProps
}