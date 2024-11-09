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
class Menu < ActiveRecord::Base
  VALID_CURRENCIES = %w[CRC USD EUR].freeze

  validates :name, presence: true
  validates :price, presence: true, numericality: { greater_than: 0 }
  validates :currency, inclusion: { in: VALID_CURRENCIES, allow_nil: true }
  validates :image_url, format: { with: URI::DEFAULT_PARSER.make_regexp, allow_blank: true }, if: lambda {
    image_url.present?
  }

  validate :currency_validation

  private

  def currency_validation
    return if currency.blank? || VALID_CURRENCIES.include?(currency)

    errors.add(:currency, "must be one of: #{VALID_CURRENCIES.join(', ')}")
  end
end
