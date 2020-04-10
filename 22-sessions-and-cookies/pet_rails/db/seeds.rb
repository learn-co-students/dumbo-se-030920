ozzy = Pet.create(name: "Ozzy", age: 3, breed: "Poodle")
dog = Pet.create(name: "Dog", age: 5, breed: "Dog")
cat = Pet.create(name: "Cat", age: 74, breed: "Kitten")

def address
  Faker::Address.street_address + "\n\n" + Faker::Address.city + ", " + Faker::Address.state + " " + Faker::Address.zip[0...5]
end

doc_who = Doctor.create(
    name: "Doctor Who", 
    location: address,
    specialization: Faker::Creature::Animal.name.pluralize,
    rating: rand(0.0..5.0),
    image_url: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/46/1542107436-jodie-whittaker-doctor-who.jpg?crop=0.692xw:1xh;center,top&resize=480:*"
)

house = Doctor.create(
  name: "Doctor House", 
  location: address,
  specialization: Faker::Creature::Animal.name.pluralize,
  rating: rand(0.0..5.0),
  image_url: "https://cdn.vox-cdn.com/thumbor/SnJ0hc9HVL9DIHlKIMEreeBHFFw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18527591/603542.jpg"
)

frank = Doctor.create(name: "Doctor Frankenstein", 
  location: address,
  specialization: Faker::Creature::Animal.name.pluralize,
  rating: rand(0.0..5.0),
  image_url: "https://i.pinimg.com/originals/3d/0c/c9/3d0cc9a111640456edfd973d855f6f24.jpg"
)

Appointment.create(pet: ozzy, doctor: doc_who, time: "10 AM Saturday")
frank.appointments.create(pet: cat, time: "2PM Thursday")

Appointment.create(pet_id: ozzy.id, doctor_id: frank.id, time: "9AM Friday")
