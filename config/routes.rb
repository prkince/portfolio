Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "bio", to: "pages#bio", as: :bio
  get "bio-fr", to: "pages#bio-fr"
  get "home-fr", to: "pages#home-fr"
  get "projects", to: "pages#projects", as: :projects
  get "projects-fr", to: "pages#projects-fr"
  get    "contact", to: "contacts#new", as: :contact
  post   "contacts", to: "contacts#create"
end
