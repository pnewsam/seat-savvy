class Assignment < ApplicationRecord
  belongs_to :section
  has_many :grades
  validates :name, presence: true
  accepts_nested_attributes_for :grades

  after_create :init_grades
private
  def init_grades
    self.section.students.each do |s|
      self.grades.create(student_id: s.id)
    end
  end
end
