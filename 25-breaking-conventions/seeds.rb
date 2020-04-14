doc_oc = Doctor.create(name: "Doctor Octopus")
dr_who = Doctor.create(name: "Doctor Who")
dr_seuss = Doctor.create(name: "Dr. Seuss")

peter_parker = Patient.create(name: "Peter Parker")
mary_jane = Patient.create(name: "Mary Jane")

david_tennant = Patient.create(name: "David Tennant")
matt_smith = Patient.create(name: "Matt Smith")

thing_1 = Patient.create(name: "Thing 1")
thing_2 = Patient.create(name: "Thing 2")
cat_in_the_hat = Patient.create(name: "The Cat in the Hat")

Appointment.create(doctor: doc_oc, patient: peter_parker, date: "Today")
Appointment.create(doctor: doc_oc, patient: mary_jane, date: "Tomorrow")

Prescription.create(doctor: doc_oc, patient: david_tennant, medicine: "Tylenol")
Prescription.create(doctor: doc_oc, patient: matt_smith, medicine: "Advil")

Appointment.create(doctor: dr_who, patient: david_tennant, date: "Today")
Appointment.create(doctor: dr_who, patient: matt_smith, date: "Tomorrow")

Prescription.create(doctor: dr_who, patient: thing_1, medicine: "Tylenol")
Prescription.create(doctor: dr_who, patient: thing_2, medicine: "Tylenol")
Prescription.create(doctor: dr_who, patient: cat_in_the_hat, medicine: "Advil")

Appointment.create(doctor: dr_seuss, patient: thing_1, date: "Today")
Appointment.create(doctor: dr_seuss, patient: thing_2, date: "Today")
Appointment.create(doctor: dr_seuss, patient: cat_in_the_hat, date: "Tomorrow")

Prescription.create(doctor: dr_seuss, patient: peter_parker, medicine: "Tylenol")
Prescription.create(doctor: dr_seuss, patient: mary_jane, medicine: "Advil")
