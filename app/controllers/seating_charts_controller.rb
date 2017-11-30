class SeatingChartsController < ApplicationController
  wrap_parameters false
  def new
    @section = Section.find(params[:section_id])
  end
  def create
    section = Section.find(params[:section_id])
    if section.update(seating_chart_params)
      flash[:notice] = 'Seating Chart successfully created!'
      redirect_to section_path(section)
    else
      flash[:alert] = 'Something went wrong!'
      redirect_to new_section_seating_chart_path(section)
    end
  end
private
  def seating_chart_params
    params.require(:section).permit(seating_chart: {})
  end
end