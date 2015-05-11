Rails.application.routes.draw do
  root to: "list_items#index"
  resources :list_items, except: [:index, :new]
  post "list_items/:id/toggle", to: "list_items#toggle"
end
