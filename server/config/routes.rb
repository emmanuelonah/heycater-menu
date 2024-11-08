Rails.application.routes.draw do
  draw :api_v1_routes
  get "up" => "rails/health#show", as: :rails_health_check
end
