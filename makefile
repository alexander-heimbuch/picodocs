start:
	docker run -p 4000:4000 -v $(shell pwd):/site bretfisher/jekyll-serve

publish:
	gem push $(shell gem build picodocs.gemspec | grep 'picodocs-' | sed 's/File: / /g')
