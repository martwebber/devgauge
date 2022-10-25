# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_24_184756) do
  create_table "assessments", force: :cascade do |t|
    t.boolean "status"
    t.integer "user_id"
    t.integer "duration"
    t.boolean "is_actual"
    t.datetime "assessment_date"
    t.datetime "start_time"
    t.string "assessment_type"
    
  create_table "answers", force: :cascade do |t|
    t.string "answer_content"
    t.integer "question_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["question_id"], name: "index_answers_on_question_id"
  end

  create_table "assessment_questions", force: :cascade do |t|
    t.integer "assessment_id", null: false
    t.integer "question_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["assessment_id"], name: "index_assessment_questions_on_assessment_id"
    t.index ["question_id"], name: "index_assessment_questions_on_question_id"
  end

  create_table "questions", force: :cascade do |t|
    t.string "quiz"
    t.integer "assessment_id", null: false
    t.string "correct_answer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["assessment_id"], name: "index_questions_on_assessment_id"
  end

  create_table "student_answers", force: :cascade do |t|
    t.integer "question_id", null: false
    t.integer "user_id", null: false
    t.integer "answer_id", null: false
    t.integer "assessment_id", null: false
    t.string "scores"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["answer_id"], name: "index_student_answers_on_answer_id"
    t.index ["assessment_id"], name: "index_student_answers_on_assessment_id"
    t.index ["question_id"], name: "index_student_answers_on_question_id"
    t.index ["user_id"], name: "index_student_answers_on_user_id"
  end

  add_foreign_key "answers", "questions"
  add_foreign_key "assessment_questions", "assessments"
  add_foreign_key "assessment_questions", "questions"
  add_foreign_key "questions", "assessments"
  add_foreign_key "student_answers", "answers"
  add_foreign_key "student_answers", "assessments"
  add_foreign_key "student_answers", "questions"
  add_foreign_key "student_answers", "users"

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "username"
    t.integer "user_type", default: 0
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
