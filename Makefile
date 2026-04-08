SITE_DIR ?= site
HOST ?= 127.0.0.1
PORT ?= 4173
SCRAPER_CACHE_HOURS ?= 6
SCRAPER_REFRESH ?= 0
QUERY_PACK_CONFIG ?= query-pack-config.json

.PHONY: help install build check serve prototype-index site-build scrape-catalog scrape-catalog-incremental sync-nvim

help:
	@printf '%s\n' \
		'make install          Install site npm dependencies' \
		'make build            Compile strict TypeScript into site/dist/' \
		'make check            Run the site TypeScript type check' \
		'make scrape-catalog   Refresh parser and query-pack data from GitHub' \
		'make scrape-catalog-incremental  Refresh scraper outputs and reuse unchanged repos' \
		'make sync-nvim        Alias for make scrape-catalog' \
		'make prototype-index  Refresh top-level prototype index JSON files' \
		'make serve            Build and serve the site locally' \
		'' \
		'Optional overrides:' \
		'  SITE_DIR=site HOST=0.0.0.0 PORT=8080 make serve' \
		'  SCRAPER_CACHE_HOURS=6 make scrape-catalog' \
		'  SCRAPER_REFRESH=1 make scrape-catalog' \
		'  QUERY_PACK_CONFIG=query-pack-config.json make scrape-catalog'

install:
	npm install --prefix "$(SITE_DIR)"

build: site-build prototype-index

site-build:
	npm run --prefix "$(SITE_DIR)" build

check:
	npm run --prefix "$(SITE_DIR)" check

prototype-index: site-build
	node "scripts/export-prototype-index.mjs"

scrape-catalog:
	SCRAPER_CACHE_HOURS="$(SCRAPER_CACHE_HOURS)" SCRAPER_REFRESH="$(SCRAPER_REFRESH)" python3 "scripts/scrape_catalog.py" "$(QUERY_PACK_CONFIG)"

scrape-catalog-incremental:
	SCRAPER_CACHE_HOURS="$(SCRAPER_CACHE_HOURS)" SCRAPER_REFRESH="$(SCRAPER_REFRESH)" python3 "scripts/scrape_catalog.py" --incremental "$(QUERY_PACK_CONFIG)"

sync-nvim:
	$(MAKE) scrape-catalog

serve: build
	@printf 'Serving %s at http://%s:%s\n' "$(SITE_DIR)" "$(HOST)" "$(PORT)"
	cd "$(SITE_DIR)" && python3 -m http.server "$(PORT)" --bind "$(HOST)"
