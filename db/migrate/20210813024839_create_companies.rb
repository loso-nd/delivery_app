class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.string :company_name
      t.string :speciality
      t.integer :ratings
      t.string :image_url

      t.timestamps
    end
  end
end