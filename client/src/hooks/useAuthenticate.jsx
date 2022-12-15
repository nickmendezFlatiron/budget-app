const useAuthenticate = async () => {
  const response = await fetch('/api/authorize')
  const data = await response.json()
  if(!response.ok){
   throw new Error(data.errors)
    
  }
  return data
}

export default useAuthenticate