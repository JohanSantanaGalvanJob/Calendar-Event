Rails.application.routes.draw do
  resources :event_users
  resources :events
  # resources :users
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  get '/member_details' => 'members#index'
  resources :locations
  resources :event_types
  # scope "admin" do
    get "users", to: "users#index"
    get "users/:id", to: "users#show", as: "user"
    delete "users/:id", to: "users#destroy"
    delete "users", to: "users#destroyAll"
    put "users/:id", to: "users#update"
  # end
end
