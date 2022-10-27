# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
#Assessment.create = (status: 0, user_id: '1', duration:"20", is_actual:"true", assessment_date: "2022-3-2", start_time: "2022-3-2", assessment_type: "Python")
#Assessment.create = (status: 1, user_id: '2', duration:"10", is_actual:"false", assessment_date: "2022-4-2", start_time: "2023-9-4", assessment_type: "Ruby on rails")
#Assessment.create = (status: 0, user_id: '3', duration:"50", is_actual:"true", assessment_date: "2022-3-2", start_time: "2022-6-9", assessment_type: "Bootstrap")

# # answer1 = Answer.create(answer_content: "Hello", question_id: quiz1.id)
# answer2 = Answer.create(answer_content: "Hello one", question_id: quiz2.id)
# answer3 = Answer.create(answer_content: "Hello two", question_id: quiz3.id)

# # quiz1 = Question.create(quiz: "What is your name?", answer_id: answer1.id)
# quiz2 = Question.create(quiz: "What is your fav food?", answer_id: answer2.id)
# quiz3 = Question.create(quiz: "What is your fav name?", answer_id: answer3.id)


Assessment.create(user_id: 1, title: "Python", description: "Introduction to Python")
Assessment.create(user_id: 1, title: "Ruby on rails", description: "Ruby on rails")
Assessment.create( user_id: 1 , title: "Bootstrap", description: "Introduction to Bootstrap")
