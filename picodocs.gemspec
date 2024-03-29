# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "picodocs"
  spec.version       = "0.2.8"
  spec.authors       = ["Alexander Heimbuch"]
  spec.email         = ["github@heimbu.ch"]

  spec.summary       = %q{Minimal Jekyll documentation theme based on Picocss and Prism}
  spec.homepage      = "https://github.com/alexander-heimbuch/picodocs"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll"

  spec.add_development_dependency "rake"
end
