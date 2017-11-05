class AssignmentsController < ApplicationController
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
  private
  def assignment_params
    params.require(:assignment).permit(:name)
  end
end