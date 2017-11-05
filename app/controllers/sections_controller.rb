class SectionsController < ApplicationController
  before_action :authenticate_teacher!  
  def index
    @sections = current_teacher.sections
  end

  def show
    @section = Section.find(params[:id])
    @students = @section.students
    @assignments = @section.assignments
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
  
  def new
    @section = Section.new
  end

  def edit
    @section = Section.find(params[:id])
  end

  def update
    @section = Section.find(params[:id])
    if @section.update(section_params)
      redirect_to section_path(@section)
      flash[:notice] = "Section successfully updated!"
    else
      redirect_to section_path(@section)
      flash[:alert] = "Something went wrong!"
    end
  end

  def destroy
    @section = Section.find(params[:id])
    if @section.destroy
      redirect_to sections_path
      flash[:notice] = "Section successfully deleted!"
    else
      redirect_to section_path(@section)
      flash[:alert] = "Something went wrong!"
    end
  end

private
  def section_params
    params.require(:section).permit(:name)
  end
end