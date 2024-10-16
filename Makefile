install:
	npm ci
lint:
	npx eslint . --ignore-pattern eslint.config.js
test:
	npm test
