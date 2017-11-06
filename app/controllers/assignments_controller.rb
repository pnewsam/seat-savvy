class AssignmentsController < ApplicationController
  
  def show
    @section = Section.find(params[:section_id])
    @assignment = Assignment.find(params[:id])
    @grades = @assignment.grades
  end

  def new
    @section = Section.find(params[:section_id])
    @assignment = Assignment.new
  end

  def create
    section = Section.find(params[:section_id])
    assignment = Assignment.new(assignment_params)
    assignment.section_id = section.id
    if assignment.save
      redirect_to section_path(section)
      flash[:notice] = "Assignment successfully created!"
    else
      redirect_to section_path(section)
      flash[:warning] = "Something went wrong!"
    end
  end

  def edit
    @section = Section.find(params[:section_id])
    @assignment = Assignment.find(params[:id])
  end

  def update
    section = Section.find(params[:section_id])
    assignment = Assignment.find(params[:id])
    if assignment.update(assignment_params)
      redirect_to section_path(section)
      flash[:notice] = "Assignment successfully updated!"
    else
      redirect_to section_path(section)
      flash[:warning] = "Something went wrong!"
    end
  end

  def destroy
    section = Section.find(params[:section_id])
    assignment = Assignment.find(params[:id])
    if assignment.destroy
      redirect_to section_path(section)
      flash[:notice] = "Assignment successfully deleted!"
    else
      redirect_to section_path(section)
      flash[:warning] = "Something went wrong!"
    end
  end

  private
  def assignment_params
    params.require(:assignment).permit(:name, grades_attributes: [:id, :value])
  end
end