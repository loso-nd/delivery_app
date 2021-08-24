class User < ApplicationRecord
    has_many :bookings
    has_many :companies, through: :bookings

    has_secure_password

    validates :username, uniqueness: true
    validates :username, :password, presence: {message: "Username & Password must exist"}

    #macro for BCryptPassword
    #creates and authenticates
    #def password=(value)
    #self.password_digest = BCrypt::Password.create(value)
    #end
    #def authenticates=(password)
    #BCrypt::Password.new(self.password_digest) == password
    #end
end
