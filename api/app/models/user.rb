# frozen_string_literal: true

class User < ApplicationRecord
  enum :user_type, { student: 0, TM: 1, admin: 2 }
  has_many :student_answers
  validates_presence_of :first_name,
                        :last_name,
                        :username,
                        :email,
                        :password,
                        :user_type
  validates_uniqueness_of :username, :email
  validates_inclusion_of :user_type,
                         in: %w[student TM admin],
                         message: '%<value>s is not a valid user type'
  # validates_inclusion_of :user_type, :in => %w(student TM admin), :message =>  "%{value} is not a valid user type"
  # validates :email,
  # format: { with: /\b[A-Z0-9._%a-z\-]+@student\.moringaschool\.com\z/,
  # message: "must be a student.moringaschool.com account" }
  # validates :validate_email_domain

  has_secure_password

  # def validate_email_domain
  #     # debugger
  #     if (:user_type == 'TM')
  #         unless email.match?(/\b[A-Z0-9._%a-z\-]+@moringaschool\.com\z/)
  #             errors.add(:email, "this email is invalid forb a tm")
  #         end
  #     elsif(:user_type == 'student')
  #         unless email.match?(/\b[A-Z0-9._%a-z\-]+@student\.moringaschool\.com\z/)
  #             errors.add(:email, "the email you entered is invalid fr a moringa studnt")
  #         end
  #     # else
  #     #     errors.add(:email, "Invalid email")
  #   end
  # end

  has_many :assessments
end
