class Doctor < ApplicationRecord
    # Doctor Who > Doctor Oct
  # DocWho.relationships_in_which_I_am_older => [1]
  # DocOc.relationships_in_which_I_am_older => []

  # DocWho.relationships_in_which_I_am_younger => []
  # DocOc.relationships_in_which_I_am_younger => [1]

  has_many :relationships_in_which_I_am_older, class_name: "Sibling", foreign_key: "old_id"
  has_many :younger_siblings, through: :relationships_in_which_I_am_older, source: :younger_sibling

  has_many :relationships_in_which_I_am_younger, class_name: "Sibling", foreign_key: 'young_id'
  has_many :older_siblings, through: :relationships_in_which_I_am_younger, source: :older_sibling




  has_many :prescriptions
  has_many :patients, through: :prescriptions, source: :person_receiving_the_medicine


  has_many :appointments
  has_many :people_Im_seeing, through: :appointments, source: :patient


  def all_siblings
    self.older_siblings + self.younger_siblings
  end



end
