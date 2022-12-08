const useLogout = async () => {
  const res = await fetch('/api/logout', {method: 'DELETE'})
  
    return res
}

export default useLogout