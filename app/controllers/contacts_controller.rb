class ContactsController < ApplicationController

	def new
		@contact = Contact.new
	end

	def create
		@contact = Contact.new(params[:contact])
		@contact.request = request
		if @contact.deliver
		  	flash.now[:notice] = 'Thank you for your message, I will get back to you as soon as possible'
		else
			flash.now[:error] = 'Please check your entry'
			render :new
		end
	end

	private

	def contact_params
		params.require(:contact).permit(:email, :name, :subject, :content)
	end  

end
