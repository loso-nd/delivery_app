class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.integer :user_id
      t.integer :company_id
      t.string :pickup
      t.string :destination
      t.integer :time
      t.string :status
      t.string :speciality

      t.timestamps
    end
  end
end
