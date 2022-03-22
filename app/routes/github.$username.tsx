import { LoaderFunction, useLoaderData } from "remix";
import { Api, GithubContainer, LoaderDataProps } from "~/features/github";

export const loader: LoaderFunction = async ({ params }) => {
  return {
    user: await Api.getGithubUser(params.username)
  }
}

export default function () {
  const { user } = useLoaderData<LoaderDataProps>()
  return <GithubContainer user={user}/>
}
