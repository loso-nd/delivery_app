class UsersController < ApplicationController
    def create
        #goes through validations
        user = User.create(user_params)
        if user.valid?
             render json: {id:user.id, username: user.username}
        else 
             render json: {message: user.errors.full_messages}
        end 
     end 

    private
    def user_params
        params.require(:user).permit(:username, :password, :email)
    end
end
