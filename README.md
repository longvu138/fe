# Requirements

- Nodejs version 20.x

# Setup

```bash
$ npm i
```

# Development

```bash
$ npm run dev
```

# Production

```bash
$ npm run prod
```

# Multi Language

### Create language key

Step 1. Add key language in [here](https://docs.google.com/spreadsheets/d/1CZDz2QjlRDE3xx4tkUjc0yfizfI1QkS0pzKf3EtfcqE/edit?gid=0#gid=0). Save Csv file to src/locale/language.csv

Step 2. Run command `cd src/locale && node CsvToJson.cjs`

### Usage

```
    import {trans} from '@/locale'

    let value = trans('sidebar.title')

    console.log('content', value)
```

## Icons

Font Awesome Pro 6.0.0 by [@fontawesome](https://fontawesome.com)
