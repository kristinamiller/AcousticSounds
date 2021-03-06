Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]  
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:index, :show, :update, :create, :destroy] do
      resources :comments, only: [:index]
    end
    resources :comments, only: [:create, :destroy]
  end
  
  root "static_pages#root"


end
