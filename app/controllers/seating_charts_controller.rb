class SeatingChartsController < ApplicationController
  def new
    @section = Section.find(params[:section_id])
  end
end