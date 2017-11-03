class Section < ApplicationRecord
  belongs_to :teacher
  has_many :students
  validates :name, presence: true
end