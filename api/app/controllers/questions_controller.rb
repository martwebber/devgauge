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
        question.update(update_quiz)
        render json: question
    end

    def destroy
        question = Question.find(params[:id])
        question.destroy
        head :no_content
    end

    private
    def update_quiz
        params.permit(:quiz, :correct_answer)
    end

    def params_quiz
        params.permit(:quiz, :correct_answer)
    end

end
