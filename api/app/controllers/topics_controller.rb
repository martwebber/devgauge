# frozen_string_literal: true

class TopicsController < ApplicationController
  # GET
  def index
    render json: Topic.all
  end

  # POST
  def create
    topic = Topic.create(topic_params)
    render json: topic, status: :created
  end

  # PATCH
  def update
    topic = Topic.find(params[:id])
    topic.update(topic_params)
    render json: topic
  end

  # DELETE
  def destroy
    topic = Topic.find(params[:id])
    topic.destroy
    head :no_content
  end

  private

  def topic_params
    params.permit(:topic_content)
  end
end
