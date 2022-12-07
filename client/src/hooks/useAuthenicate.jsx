import React from 'react'

const useAuthenicate = async () => {
  const response = await fetch('/authorize')
  const data = await response.json()

  return data
  
}

export default useAuthenicate