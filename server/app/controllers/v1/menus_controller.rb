module V1
  class MenusController < ApplicationController
    # GET /v1/menus to list all menus
    # GET /v1/menus?search=term to search by name
    # GET /v1/menus?sort=price_asc to sort by price in ascending order
    # GET /v1/menus?sort=price_desc to sort by price in descending order
    def index
      render json: menus
    end

    def create
      @menu = Menu.new(menu_params)
      if @menu.save
        render json: @menu, status: :created
      else
        render json: { errors: @menu.errors.full_messages }, status: :unprocessable_entity
      end
    end

    private

    def searched_menus
      return Menu.all unless params[:search].present?

      search_term = ActiveRecord::Base.sanitize_sql_like(params[:search])
      Menu.where('LOWER(name) LIKE ?', "%#{search_term.downcase}%")
    end

    def sorted_menus(menus)
      return menus unless params[:sort].present?

      case params[:sort]
      when 'price_asc'
        menus.order(price: :asc)
      when 'price_desc'
        menus.order(price: :desc)
      else
        menus
      end
    end

    def menus
      @menus ||= sorted_menus(searched_menus)
    end

    def menu_params
      params.require(:menu).permit(:name, :description, :price, :currency, :image_url)
    end
  end
end
