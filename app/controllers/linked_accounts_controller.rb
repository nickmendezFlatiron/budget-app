class LinkedAccountsController < ApplicationController
  
  def index
   
    if current_user
      render json: current_user.linked_accounts, status: :ok
    end
  end
end
