require 'rails_helper'

feature "Navigate to Why Page" do
  scenario "from homepage" do
    visit '/'
    click_link 'Why How What'
    expect(page).to have_content 'We Believe'
  end
end