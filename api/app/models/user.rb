class User < ApplicationRecord
    enum :user_type, {student:0,TM:1,admin:2}
    validates :email, uniqueness: true, presence: true
    validates :username, uniqueness: true, presence: true
    has_secure_password
end
