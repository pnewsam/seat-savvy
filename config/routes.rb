Rails.application.routes.draw do
  devise_for :teachers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :sections do
    resources :students, only: [:index, :create, :new, :edit, :update, :destroy]
    resources :assignments, only: [:show, :create, :new, :edit, :update, :destroy] do
      resources :grades
    end
    resource :seating_chart, only: [:show, :new, :create, :edit, :update]
  end

  root to: "welcome#index"
end