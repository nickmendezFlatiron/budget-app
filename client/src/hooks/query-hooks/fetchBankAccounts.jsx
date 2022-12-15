const fetchBankAccounts = async () => {
  const fetchAccounts = await fetch(`/api/linked_accounts`)
  const response = await fetchAccounts.json()
  return response 
}

export default fetchBankAccounts;