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

    def create
        jwt_data = decoded_token
        user = User.find(jwt_data[0]["user_id"]) 
        user1 = user.user_type
        if jwt_data  && (user1 != "student")
            question = Question.create(params_quiz)
            render json: question
            # debugger
        else
            render json: {errors: ["Only TM and admin can create a Question"]}
        end
    end
    
    #update a question

    def update
        question = Question.find(params[:id])
        jwt_data = decoded_token
        user = User.find(jwt_data[0]["user_id"]) 
        user1 = user.user_type
        if jwt_data  && (user1 != "student")
            question.update(update_quiz)
            render json: question
        else
            render json: {errors: ["Only TM and admin can update a Question"]}
        end
    end


    def destroy
        question = Question.find(params[:id])
        jwt_data = decoded_token
        user = User.find(jwt_data[0]["user_id"]) 
        user1 = user.user_type
        if jwt_data  && (user1 != "student")
            question.destroy
            head :no_content
        else
            render json: {errors: ["Only TM and admin can delete a Question"]}
        end
    end


    private
    def update_quiz
        params.permit(:quiz, :correct_answer)
    end

    def params_quiz
        params.permit(:quiz, :correct_answer, :topic_id)
    end

end
