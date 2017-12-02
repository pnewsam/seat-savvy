class SeatingChartsController < ApplicationController
  wrap_parameters false
  def show
    section = Section.find(params[:section_id])
    seating_chart = section.seating_chart
    seating_chart.each do |key, value|
      if value
        student = Student.find(value.to_i)
        seating_chart[key] = student
      end
    end
    respond_to do |format|
      format.html { render json: seating_chart }
      format.js { render json: seating_chart }
    end
  end
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