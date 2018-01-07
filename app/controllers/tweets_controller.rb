class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.new(tweet_params)

    if @tweet.save
      format.html do
        if request.xhr?
          render partial: 'tweet', locals: { todo: @tweet }
        else
          redirect_to tweets_path
        end
      end
      format.json { render json: @todo }
    else
      render :index
    end
  end

  def destroy; end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
