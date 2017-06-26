class CreatePeople < ActiveRecord::Migration[5.1]
  def change
    create_table :people do |t|
      t.string :first_name
      t.string :last_name
      t.string :your_why
      t.text :what_areas_of_growth_interest_you
      t.string :email
      t.string :occupation
      t.string :password

      t.timestamps
    end
  end
end
