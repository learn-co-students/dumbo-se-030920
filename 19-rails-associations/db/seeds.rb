ozzy = Pet.create(name: "Ozzy", age: 3, breed: "Poodle")
dog = Pet.create(name: "Dog", age: 5, breed: "Dog")
cat = Pet.create(name: "Cat", age: 94, breed: "Kitten")


doc_who = Doctor.create(name: "Doctor Who", location: "Earth")
house = Doctor.create(name: "Doctor House", location: "New Jersey")
frank = Doctor.create(name: "Doctor Frankenstein", location: "England")


Appointment.create(pet: ozzy, doctor: doc_who, time: "10 AM Saturday")
frank.appointments.create(pet: cat, time: "2PM Thursday")


Appointment.create(pet_id: ozzy.id, doctor_id: frank.id, time: "9AM Friday")
