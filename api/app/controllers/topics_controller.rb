class TopicsController < ApplicationController
    
    #GET
      def index
        render json: Topic.all
      end

     #GET
     def show
      topic = Topic.find(params[:id])
      render json: topic
     end

    #POST
      def create
        topic = Topic.create(topic_params)
        render json: topic, status: :created
      end

    #PATCH
      def update
        topic = Topic.find(params[:id])
        topic.update(topic_params)
        render json: topic
      end

    #DELETE
    def destroy
        topic = Topic.find(params[:id])
        topic.destroy
        head :no_content
    end

    private

    def topic_params
        params.permit(:topic_content)
    end

    def find_topic
      Topic.find(params[:id])
  end 
end
