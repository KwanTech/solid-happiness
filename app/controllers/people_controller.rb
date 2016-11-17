class PeopleController < ApplicationController
  def index
    @person = Person.new
  end
end
