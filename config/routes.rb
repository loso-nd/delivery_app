Rails.application.routes.draw do
resources :users, only: [:show]
resources :companies, only: [:index, :show]
resources :bookings, only: [:index, :show, :create]

post "/signup", to: "users#create"
get "/me", to: "users#show"
post "/login", to: "sessions#create"
delete "/logout", to: "sessions#destroy"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
