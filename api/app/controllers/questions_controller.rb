class QuestionsController < ApplicationController

    #display all questions
    def index
        questions = Question.all
        render json: questions
    end

    #find one question
    def show
        question = Question.find(params[:id])
        render json: question
    end

    #create a new question
    def create
        question = Question.create(params_quiz)
        render json: question
    end

    #update a question
    def update
        question = Question.find(params[:id])
        quetion.update(update_quiz)
        render json: question
    end

    private
    def update_quiz
        params.permit(:quiz)
    end

    def params_quiz
        params.permit(:question, :answer_id)
    end
end
