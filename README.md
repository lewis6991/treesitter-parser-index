# Tree-sitter Parser Index

This repo is a small site for exploring Tree-sitter parser releases, bundled queries, query sources, and editor support.

## Status

This project is a work in progress.

It is also, unapologetically, vibe coded.

Expect rough edges, changing data shapes, and the occasional sharp corner while the model settles down.

## What Is Here

- `site/`: the static site
- `scripts/scrape_catalog.py`: the scraper that refreshes parser and query-pack data from GitHub
- `query-pack-config.json`: config for query-pack scraping inputs and support metadata sources
- `index.json`, `parsers.json`, `query-packs.json`, `targets.json`, `languages.json`: exported top-level JSON artifacts

## Local Development

Install dependencies:

```sh
make install
```

Build the site:

```sh
make build
```

Serve it locally:

```sh
make serve
```

The default local URL is `http://127.0.0.1:4173`.

## Refreshing Data

Refresh scraped catalog data:

```sh
make scrape-catalog
```

The scraper takes the config file as an argument. The default make target passes:

```sh
query-pack-config.json
```

Useful overrides:

```sh
SCRAPER_REFRESH=1 make scrape-catalog
SCRAPER_CACHE_HOURS=0 make scrape-catalog
QUERY_PACK_CONFIG=query-pack-config.json make scrape-catalog
```

The scraper uses `gh api`, so you need the GitHub CLI installed and authenticated.
