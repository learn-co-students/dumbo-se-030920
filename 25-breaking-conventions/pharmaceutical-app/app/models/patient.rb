class Patient < ApplicationRecord

  has_many :appointments
  has_many :doctors, through: :appointments

  # for a direct has_many relationship
    # provide the class_name where we're looking and the foreign_key that matches the model's (Patient) primary key
  has_many :prescs, class_name: "Prescription", foreign_key: "patient_id"


  # has_many SOMETHING through: :model relationship
    # if you want to rename it, you'll need to provide a source (the other side of the relationship in the belongs_to)
  has_many :the_doctor_I_receive_meds_from, through: :prescs, source: :pharmacist

end
