# frozen_string_literal: true

Rails.application.routes.draw do
  resources :assessments
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :users
  resources :student_answers
  resources :answers
  resources :questions
  resources :topics, except: [:show]
  post '/login', to: 'authentication#login'
  delete '/logout', to: 'authentication#logout'
  get '/me', to: 'users#show'
end
