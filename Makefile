install:
	npm ci
lint:
	npx eslint . --ignore-pattern eslint.config.js --ignore-pattern __tests__/
test:
	npm test
