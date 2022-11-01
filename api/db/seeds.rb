# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])

# # answer1 = Answer.create(answer_content: "Hello", question_id: quiz1.id)
# answer2 = Answer.create(answer_content: "Hello one", question_id: quiz2.id)
# answer3 = Answer.create(answer_content: "Hello two", question_id: quiz3.id)

# # quiz1 = Question.create(quiz: "What is your name?", answer_id: answer1.id)
# quiz2 = Question.create(quiz: "What is your fav food?", answer_id: answer2.id)
# quiz3 = Question.create(quiz: "What is your fav name?", answer_id: answer3.id)

Assessment.create(user_id: 1, title: 'Python', description: 'Introduction to Python', duration: '1',
                  assessment_type: 'trial')
Assessment.create(user_id: 1, title: 'Ruby on rails', description: 'Ruby on rails', duration: '1',
                  assessment_type: 'trial')
Assessment.create(user_id: 1, title: 'Bootstrap', description: 'Introduction to Bootstrap', duration: '1',
                  assessment_type: 'trial')
Assessment.create(user_id: 1, title: 'Python', description: 'Introduction to Python', duration: '1',
                  assessment_type: 'trial')
Assessment.create(user_id: 1, title: 'Ruby on rails', description: 'Ruby on rails', duration: '1',
                  assessment_type: 'trial')
Assessment.create(user_id: 1, title: 'Bootstrap', description: 'Introduction to Bootstrap', duration: '1',
                  assessment_type: 'trial')
