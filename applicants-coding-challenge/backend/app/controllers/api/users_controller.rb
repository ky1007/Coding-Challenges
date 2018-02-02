class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # def show
  #   # .find_by returns true or false whereas .find will throw an error
  #   @user = User.find_by(id: params[:id])
  #   if @user 
  #     render json: @user
  #   else 
  #     render json: ['No user found'], status: 404
  #   end
  # end

  def index
    @users = User.all
    if @users
      render 'api/users/index'
    else
      render json: ['No users found'], status: 404
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update_attributes(user_params)
      render 'api/users/show'
    elsif @user
      render json: ['User not found'], status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :zip_code, :email, :coding_test, :user_type_id, :id, :admitted)
  end
end
