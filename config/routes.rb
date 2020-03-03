Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "bio", to: "pages#bio", as: :bio
  get "biographie", to: "pages#biographie"
  get "homepage", to: "pages#homepage", as: :home
  get "projects", to: "pages#projects", as: :projects
  get "projets", to: "pages#projets"
  get  "contact", to: "contacts#new", as: :contact

  post "contacts", to: "contacts#create"
end
