Rails.application.routes.draw do

	scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
	  root to: 'pages#home'
	  get "home", to: "pages#home", as: :home
	  get "bio", to: "pages#bio", as: :bio
	  get "projects", to: "pages#projects", as: :projects
	  get  "contact", to: "contacts#new", as: :contact

	  post "contacts", to: "contacts#create"
	end	
end
