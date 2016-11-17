Rails.application.routes.draw do
  root 'home#index'

  get '/why', to: 'why#index'
  get '/register', to: 'people#index'
  resources :people, only: [:index]
end
