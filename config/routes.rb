Rails.application.routes.draw do
resources :users, only: [:create]
resources :companies, only: [:index, :show]
resources :bookings, only: [:index, :show, :create]
resources :log_in, only: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
