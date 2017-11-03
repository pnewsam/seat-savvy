Rails.application.routes.draw do
  devise_for :teachers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :sections do
    resources :students, only: [:create, :new, :edit, :update, :destroy]
  end

  root to: "welcome#index"
end