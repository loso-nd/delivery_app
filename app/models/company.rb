class Company < ApplicationRecord
    has_many :bookings
    has_many :users, through: :bookings
    has_many :reviews
end
