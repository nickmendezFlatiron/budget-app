Rails.application.routes.draw do
  resources :users, only: [:update]
  resources :linked_accounts, only: [:index]
  post "/graphql", to: "graphql#execute"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/authorize' , to: 'users#show';
  post '/signup' , to: 'users#create';

  post '/login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy';

  post 'plaid/create_link_token', to: 'plaid#create';
  post 'plaid/exchange_public_token', to: 'plaid#exchange';
  # root "articles#index"
end
