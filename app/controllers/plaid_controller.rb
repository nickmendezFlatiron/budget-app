class PlaidController < ApplicationController
  configuration = Plaid::Configuration.new
  configuration.server_index = Plaid::Configuration::Environment["sandbox"]
  configuration.api_key['PLAID-CLIENT-ID'] = Rails.application.credentials.dig(:plaid, :client_id) 
  configuration.api_key['PLAID-SECRET'] = Rails.application.credentials.dig(:plaid, :sandbox_secret)
  
  api_client = Plaid::ApiClient.new(
    configuration
  )
  
  @@client = Plaid::PlaidApi.new(api_client)
  
  def create
    if current_user 
      
      client_user_id = current_user.id
      request = Plaid::LinkTokenCreateRequest.new(
        {
          user: { client_user_id: current_user.id.to_s },
          client_name: 'Spend Better',
          products: ['auth', 'transactions'],
          country_codes: ['US'],
          language: "en",
          redirect_uri: PLAID_REDIRECT_URI
        }
      )
      
      response = @@client.link_token_create(request)
      render json: response, status: :ok
    else 
      render json: {errors: ["Unable to generate token. Please try again."]}, status: :unprocessable_entity
    end
  end

end
