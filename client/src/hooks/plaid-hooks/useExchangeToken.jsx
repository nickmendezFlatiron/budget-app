const useExchangeToken = async (public_token, metadata) => {
  console.log(metadata)
  const response = await fetch('/api/plaid/exchange_public_token',{
    method: 'POST',
    body: JSON.stringify({public_token,metadata}),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const accessToken = await response.json()
  console.log(accessToken)
  return accessToken
}

export default useExchangeToken;