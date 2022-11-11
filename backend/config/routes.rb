Rails.application.routes.draw do
  resources :event_users
  resources :events
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  get '/member_details' => 'members#index'
  resources :locations
  resources :event_types
end
