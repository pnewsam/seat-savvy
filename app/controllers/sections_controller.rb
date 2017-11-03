class SectionsController < ApplicationController
  before_action :authenticate_teacher!  
  def index
    @sections = current_teacher.sections
  end

  def new
    @section = Section.new
  end

  def create
    @section = Section.new(section_params)
    @section.teacher_id = current_teacher.id
    if @section.save
      redirect_to sections_path
      flash[:notice] = "Section successfully created!"
    else
      render :new
      flash[:alert] = "Something went wrong!"
    end
  end

private
  def section_params
    params.require(:section).permit(:name)
  end
end