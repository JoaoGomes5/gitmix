export interface User {
  bio: string;
  avatar_url: string,
  login: string
  html_url: string
}


export interface Repo {
  id: number;
  name: string;
  full_name: string;
  stargazers_count: number;
  html_url: string;
  language: string;
}

export interface LoaderData {
  user: User;
  repos: Repo[];
}