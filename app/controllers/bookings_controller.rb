class BookingsController < ApplicationController
    def index
        bookings = Booking.all
        render json: bookings
    end

    def show
        booking = Booking.find(params[:id])
        render json: booking
    end

    def create
        booking = Booking.create(booking_params)
        render json: booking
    end

    private
    def company_params
        params.require(:booking).permit(:user_id, :company_id, :pickup_location, :destination, :time, :ship_status, :speciality)
    end
end
