Rails.application.routes.draw do
  root 'home#index'

  get '/why', to: 'why#index'
end
