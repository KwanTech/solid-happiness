class PeopleController < ApplicationController
  def index
    @person = Person.new
  end

  def create
    @person = Person.new(person_params)
    if @person.save
      redirect_to blog_path
    else
      logger.error "Person did not save because it was invalid"
      flash[:error] =  @person.errors.full_messages.first
      redirect_to blog_url, status: 400
    end
  end

  private

  def person_params
    params.require(:person).permit(:first_name, :email)
  end
end

