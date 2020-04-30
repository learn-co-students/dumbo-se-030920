stephanie = Teacher.create(name: "Stephanie", subject: "History")
jemy = Teacher.create(name: "Jemy", subject: "Math")

current_events = Classroom.create(name: "2020: What a Year", teacher: stephanie)
current_events.assignments.create(name: "Thesis Paper")

civics = Classroom.create(name: "Civics 101", teacher: stephanie)
Assignment.create(name: "Congress Chart", classroom: civics)

geometry = jemy.classrooms.create(name: "Geometry")

Assignment.create(name: "Proofs and Theorems", classroom: geometry)
Assignment.create(name: "Triangles and Shapes", classroom: geometry)
