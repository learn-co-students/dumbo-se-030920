class Sibling < ApplicationRecord
  belongs_to :older_sibling, class_name: "Doctor", foreign_key: "old_id"
  belongs_to :younger_sibling, class_name: "Doctor", foreign_key: "young_id"
end
