class Contact < MailForm::Base
	include MailForm::Delivery

	attribute :name,      :validate => true
	attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
	attribute :subject
	attribute :content
	attribute :nickname,  :captcha  => true

	def headers
		{
		  :subject => "Demande de contact via le Portfolio",
		  :to => ENV["GMAIL_USERNAME"],
		  :from => %("#{name}" <#{email}>)
		}
	end
end
