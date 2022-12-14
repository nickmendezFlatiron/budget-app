const useExchangeToken = async (public_token, metadata) => {
  console.log(metadata)
  const exchange = await fetch('/api/plaid/exchange_public_token',{
    method: 'POST',
    body: JSON.stringify({public_token,metadata}),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const response = await exchange.json()
  console.log(response)
  return response
}

export default useExchangeToken;