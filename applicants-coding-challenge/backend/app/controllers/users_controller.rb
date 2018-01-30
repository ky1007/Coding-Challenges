class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      render ''
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.where()
    if @users
      render :index
    else
      render json: ['No users found'], status: 404
    end
  end

  def update
    @user = User.find_by()
    if @user.update_attributes(user_params)
      render :show
    elsif @user
      render json: ['User not found'], status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :zip_code, :email, :coding_test, :user_type_id)
  end
end
