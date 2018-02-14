Rails.application.routes.draw do
  root 'home#index'

  get '/why', to: 'why#index'
  get '/guidance', to: 'guidance#index'
  get '/blog', to: 'blog#index'
  resources :people, only: [:index, :create]
end
