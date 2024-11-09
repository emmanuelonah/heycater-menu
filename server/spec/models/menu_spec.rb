# == Schema Information
#
# Table name: menus
#
#  id          :integer          not null, primary key
#  currency    :string           default("USD")
#  description :text
#  image_url   :string
#  name        :string           not null
#  price       :decimal(10, 2)   not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_menus_on_name  (name)
#
require 'rails_helper'

RSpec.describe Menu, type: :model do
  describe 'validations' do
    it 'is valid with valid attributes' do
      menu = Menu.new(name: 'Margherita Pizza', price: 12.99, currency: 'USD')
      expect(menu).to be_valid
    end

    it 'is not valid without a name' do
      menu = Menu.new(price: 12.99, currency: 'USD')
      expect(menu).not_to be_valid
      expect(menu.errors[:name]).to include("can't be blank")
    end

    it 'is not valid without a price' do
      menu = Menu.new(name: 'Margherita Pizza', currency: 'USD')
      expect(menu).not_to be_valid
      expect(menu.errors[:price]).to include("can't be blank")
    end

    it 'is not valid with a price less than or equal to 0' do
      menu = Menu.new(name: 'Margherita Pizza', price: 0, currency: 'USD')
      expect(menu).not_to be_valid
      expect(menu.errors[:price]).to include('must be greater than 0')
    end

    it 'is not valid with an invalid currency' do
      menu = Menu.new(name: 'Margherita Pizza', price: 12.99, currency: 'INVALID')
      expect(menu).not_to be_valid
      expect(menu.errors[:currency]).to include('must be one of: CRC, USD, EUR')
    end

    it 'is valid with a valid currency' do
      menu = Menu.new(name: 'Margherita Pizza', price: 12.99, currency: 'USD')
      expect(menu).to be_valid
    end

    it 'is valid without a currency' do
      menu = Menu.new(name: 'Margherita Pizza', price: 12.99)
      expect(menu).to be_valid
    end

    it 'is valid with a valid image_url' do
      menu = Menu.new(name: 'Margherita Pizza', price: 12.99, currency: 'USD', image_url: 'https://example.com/image.png')
      expect(menu).to be_valid
    end

    it 'is not valid with an invalid image_url' do
      menu = Menu.new(name: 'Margherita Pizza', price: 12.99, currency: 'USD', image_url: 'invalid_url')
      expect(menu).not_to be_valid
      expect(menu.errors[:image_url]).to include('is invalid')
    end
  end
end
