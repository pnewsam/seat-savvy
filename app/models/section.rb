class Section < ApplicationRecord
  belongs_to :teacher
  has_many :students, :assignments
  validates :name, presence: true
end