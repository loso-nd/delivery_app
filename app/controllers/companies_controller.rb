class CompaniesController < ApplicationController
    def index
        companies = Company.all
        render json: companies
    end

    def show
        company = Company.find(params[:id])
        render json: company
    end

    def create
        company = Company.create(company_params)
        render json: company
    end

    private
    def company_params
        params.require(:company).permit(:company_name, :speciality, :ratings)
    end
end
