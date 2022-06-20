import { useRouter } from 'next/router'
import React from 'react'

export default function UsersView({data}) {
  const router = useRouter()

  return (
    <div>
      <h1>all users</h1>
      <ol>
        {data?.map(x=><li key={x.id}>
          <button onClick={()=>router.push('/users/'+x.id)}>{x.name}</button>
        </li>)}
      </ol>
    </div>
  )
}
