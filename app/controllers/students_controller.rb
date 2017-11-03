class StudentsController < ApplicationController
  before_action :authenticate_teacher!
  
  def new
    @section = Section.find(params[:section_id])
    @student = Student.new
  end

  def create
    section = Section.find(params[:section_id])
    @student = section.students.new(student_params)
    if @student.save
      redirect_to section_path(section)
      flash[:notice] = "Student succesfully added!"
    else
      render :new
      flash[:alert] = "Something went wrong!"
    end
  end

  private
  def student_params
    params.require(:student).permit(:name)
  end
end