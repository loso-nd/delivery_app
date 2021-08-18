class User < ApplicationRecord
    has_many :bookings
    has_many :companies, through: :bookings
    has_many :reviews

    validates :username, :password, presence: {message: "Username & Password must exist"}
    validates :username, uniqueness: true

    #macro for BCryptPassword
    has_secure_password
    #creates and authenticates
    #def password=(value)
    #self.password_digest = BCrypt::Password.create(value)
    #end
    #def authenticates=(password)
    #BCrypt::Password.new(self.password_digest) == password
    #end
end
