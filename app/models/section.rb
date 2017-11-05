class Section < ApplicationRecord
  belongs_to :teacher
  has_many :students
  has_many :assignments
  validates :name, presence: true
end