class Student < ApplicationRecord
  belongs_to :section
  has_many :grades
  validates :name, presence: true
end
