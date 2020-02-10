module SharedLinkHelper
	def link_to_home_page
		link_to "Home", root_path
	end

	def link_to_bio_page
		link_to "Bio", bio_path 
	end 

	def link_to_project_page
		link_to "Projects", projects_path
	end 

	def link_to_contact_page
		link_to "Contact", contact_path
	end 

end 