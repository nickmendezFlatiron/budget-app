Rails.application.routes.draw do
  resources :users, only: [:update]
  post "/graphql", to: "graphql#execute"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/authorize' , to: 'users#show'
  # Defines the root path route ("/")
  # root "articles#index"
end
