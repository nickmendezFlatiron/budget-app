class UsersController < ApplicationController

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end   

  def show
    if current_user
      render json: current_user, status: :ok
    else 
      render json: {errors: ["Not Authorized, please login"]}, status: :unauthorized
    end
  end


  private

  def user_params
    params.permit(:username, :email, :password, :password_confirmation, :full_name)
  end
end
