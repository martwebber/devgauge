class StudentAnswersController < ApplicationController
    def index 
        student_answers = StudentAnswer.all
        render json: student_answers
    end
end
