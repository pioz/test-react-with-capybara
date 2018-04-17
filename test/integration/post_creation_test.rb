require 'test_helper'

class PostCreationTest < ActionDispatch::IntegrationTest
  
  test "post creation" do
    visit new_post_path
    fill_in 'post[title]', with: 'Big News'
    fill_in 'post[body]', with: 'Superman is dead!'
    click_button 'Create Post' # <=== DO NOT FIND THIS BUTTON CAUSE IS ADDED WITH REACT
    assert page.has_content?('Post was successfully created.')
  end

end
