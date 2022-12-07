import React from 'react'

const useFetchPost = async ({url,body }) => {

  const res = await fetch(url,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }
    )

    const data = await res.json()
  return data
}

export default useFetchPost