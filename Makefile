install:
	npm ci

lint:
	npx eslint .

lint --fix:
	npx eslint . --fix
	
dev:
	npm run dev

build:
	npm run dev