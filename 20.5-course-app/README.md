# Course Registration App

## User Story

- A student can be created
- A student can update information and delete account.
- A student can register for many courses but a course can also have many students
- A student can drop a course

## Model Attributes
- Student => name:string 
- Course => name:string

## Setup
- `rails g model Student name age:integer --no-test-framework`
- `rails g model Course name teacher_name --no-test-framework`

- `rails g controller students index new create show edit update destroy`
- `rails g controller courses index`

- `rails db:create`
- `rails db:migrate`
- `rails db:seed`


### Deliverables 

1. Display all students in the database
2. Add new students in the index
3. Have a show page for each student
4. In the show page, the courses associated with the student are displayed.
5. In the show page, we have the ability to update or delete the specific student.
6. Ability to register for a new course using form_for and collection_select by creating a new enrollment. 
7. Ability to drop course by deleting enrollment.