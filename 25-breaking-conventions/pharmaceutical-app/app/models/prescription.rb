class Prescription < ApplicationRecord
  # an instance of a Prescription has a foreign key called :doctor_id
    # I want AR to go to the Doctor class and pull the doctor whose primary key matches Prescription's foreign_key (of doctor_id)
  belongs_to :pharmacist, class_name: "Doctor", foreign_key: "doctor_id"
  belongs_to :person_receiving_the_medicine, class_name: "Patient", foreign_key: "patient_id"
end
