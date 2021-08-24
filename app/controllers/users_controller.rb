class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        render json: user, status: :created
      end
    
      def show
        render json: @current_user
      end

    private
    def user_params
        params.require(:user).permit(:username, :password_digest, :email)
    end
end
