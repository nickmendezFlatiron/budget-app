const useGetLinkToken = async () => {
  const response = await fetch('/api/plaid/create_link_token',{method: 'POST'});
  const {link_token} = await response.json();
  return link_token;
}
export default useGetLinkToken