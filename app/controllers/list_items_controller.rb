class ListItemsController < ApplicationController
  before_action :set_list_item, only: [:show, :edit, :update, :destroy, :toggle]

  def index
    @list_items = ListItem.all
    @list_item = ListItem.new
  end

  def create
    @list_item = ListItem.new(list_item_params)

    respond_to do |format|
      if @list_item.save
        format.json { render json: @list_item }
      else
        format.json { render json: @list_item.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
  end

  def destroy
    @list_item.destroy
    respond_to do |format|
      format.json {render json: @list_item}
    end
  end

  def toggle
    @list_item.toggle!(:complete)
    respond_to do |format|
      format.json { render json: @list_item }
    end
  end

  private
    def set_list_item
      @list_item = ListItem.find(params[:id])
    end

    def list_item_params
      params.require(:list_item).permit(:content, :complete)
    end
end
