namespace :v1, defaults: { format: :jsonapi } do
  resources :menus, only: %i[index create]
end
