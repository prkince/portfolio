Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "bio", to: "pages#bio", as: :bio
  get "projects", to: "pages#projects", as: :projects

  get    "contact", to: "contacts#new", as: :contact
  post   "contacts", to: "contacts#create"
end
