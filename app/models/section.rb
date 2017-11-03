class Section < ApplicationRecord
  belongs_to :teacher
  validates :name, presence: true
end