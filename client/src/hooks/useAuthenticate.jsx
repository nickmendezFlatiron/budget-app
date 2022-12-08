const useAuthenticate = async () => {
  const response = await fetch('/api/authorize')
  const data = await  response.json()
  console.log("data", data)
  return data
}

export default useAuthenticate