const useFetchPost = async ({url,body }) => {

  const res = await fetch(`/api${url}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }
    )
    const data = await res.json()
    if(!res.ok){
      throw new Error(data.errors) 
     }
     return data
}

export default useFetchPost