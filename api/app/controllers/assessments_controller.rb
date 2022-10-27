class AssessmentsController < ApplicationController
     #get assessments
     def index
        assessments =Assessment.all
        render json: assessments 
    end

    #get assessment
    def show
        assessment = Assessment.find(params[:id])
        render json: assessment
    end

    #create assessment
    def create
        assessment = Assessment.create(params_assignment)
        render json: assessment
    end

    #update assessment
    def update
        assessment = Assessment.find(params[:id])
        if assessment
            assessment.update(params_assignment)
            render json: assessment, status: :accepted   
        else
            render json: {error: "assessment not found"}, status: :not_found  
        end

    end

    #delete assessment
    def destroy
        assessment = Assessment.find_by(id:params[:id])
        if assessment
            assessment.destroy
            head :no_content
        else
            render json: {error: "assessment not found"}, status: :not_found
        end
    end


    #private methods
    private
    def params_assignment
        params.permit( :title, :description)
    end

     # Find an assessment 
     def find_assessment 
        Assessment.find(params[:id])
    end 

    # Blog not found response 
    def assessment_not_found
        render json:  {errors: ["Assessment not found"]}, status: :not_found 
    end 
end
