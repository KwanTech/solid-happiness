require 'json'

class BlogController < ApplicationController

  def index
    @posts = tumblr_blog_client.posts('ltrainpr.tumblr.com', limit: 10, filter: 'text')["posts"]
    # @posts = tumblr_blog_client.posts('ltrainpr.tumblr.com', limit: 10, filter: 'text', tag: 'quan')["posts"]

    @person = Person.new

    respond_to do |format|
      format.html
      format.json { render json: JSON.generate(@posts)}
    end
  end

  private

  def tumblr_blog_client
    @client = Tumblr::Client.new({
      consumer_key: ENV['OAUTH_CONSUMER_KEY'],
      consumer_secret: ENV['SECRET_KEY'],
      oauth_token: ENV['OAUTH_TOKEN'],
      oauth_token_secret: ENV['OAUTH_TOKEN_SECRET']
    })
  end
end
