class AssessmentsController < ApplicationController
    before_action :authorize_assessment
    skip_before_action :authorize_assessment, only: [:index, :show]

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
        jwt_data = decoded_token
        user = User.find(jwt_data[0]["user_id"]) 
           assessment = user.assessments.create(params_assignment)
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
           params.permit( :title, :description,  :duration, :assessment_type, :user_id,)
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
