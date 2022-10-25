class AnswersController < ApplicationController

    #display all answers in the questions
    def index
      answers = Answer.all
      render json: answers
    end

    #view answer per question
    def show
        answer = Answer.find(params[:id])
        render json: answer
    end

    #create answers 
    def create
        answer = Answer.create(params_answer)
        render json: answer
    end

    #update answers
    def update
        answer = Answer.find(params[:id])
        answer.update(update_answer)
        render json: answer
    end

    private
    def params_answer
        params.permit( :answer_content, :question_id,)
    end

    def update_answer
        params.permit(:answer_content)
    end
end
