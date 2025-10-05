import { useEffect, useState } from "react"
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data= useLoaderData()
    // const [data , setData] = useState("")
    // useEffect(() => {
    //     fetch('https://api.github.com/users/JagtapBhuvanesh25')
    //     .then((res1) => (res1.json()))
    //     .then((res2) => setData(res2))
    // } , [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Get Lost"/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const resp = await fetch('https://api.github.com/users/JagtapBhuvanesh25');
    return resp.json();
}