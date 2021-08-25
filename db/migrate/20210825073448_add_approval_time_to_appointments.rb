class AddApprovalTimeToAppointments < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :approval_time, :time, null: true
  end
end
