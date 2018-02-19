Rails.application.routes.draw do
  root 'home#index'

  get '/why', to: 'why#index'
  get '/blog', to: 'blog#index'
  get '/exercises', to: 'exercises#index'
end
