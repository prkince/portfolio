require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module Portfolio
  class Application < Rails::Application
    config.generators do |generate|
          generate.assets false
          generate.helper false
          generate.test_framework  :test_unit, fixture: false
        end
    config.load_defaults 6.0
    config.i18n.available_locales = [:en, :fr]
    config.i18n.default_locale = :en
  end
end