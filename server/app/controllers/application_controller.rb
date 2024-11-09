class ApplicationController < ActionController::Base
  include ActiveRecord::Sanitization::ClassMethods

  skip_before_action :verify_authenticity_token
end
