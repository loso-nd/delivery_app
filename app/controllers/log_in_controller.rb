class LogInController < ApplicationController
    #Login is not a model, its a controller for commmunicaiton. We should be finding a user not creating one. 
    def create
        user = User.find_by(username: params[:user][:username])
        if user && user.authenticate(params[:user][:password])
            render json: {id: user.id, username: user.username}
        else
            render json: {message:['Username and/or password incorrect']}
        end
    end
end
