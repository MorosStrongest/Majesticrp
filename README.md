# Zakon Sentinel

Статический портал для законов, уставов, памяток и макросов госслужащего Majestic RP. Проект собран на Astro в режиме статической генерации, с React-островками для поиска, раскрывающихся списков и кнопок копирования.

## Что внутри

- `src/content/laws/` — отдельные Markdown-файлы по статьям законов
- `src/content/factions/` — уставы госфракций
- `src/content/memos/` — памятки и процедуры
- `src/content/macros/` — макросы в JSON
- `src/content/wiki/` — статьи базы знаний
- `src/data/profile.json` — профиль госслужащего
- `src/data/laws-index.json` — индекс законов, который можно генерировать автоматически
- `scripts/fetch-laws.mjs` — парсер для страницы Docossum
- `wrangler.toml` — деплой на Cloudflare Pages

## Установка

```bash
npm install
npm run dev
```

## Парсинг законов

По умолчанию скрипт пытается скачать страницу `https://docossum.com/handbook/phoenix` и разбить её на статьи.

### Вариант 1 — живой сайт

```bash
npm run parse-laws
```

### Вариант 2 — локальный HTML-дамп

Если нужно прогнать заранее сохранённый HTML:

```bash
node scripts/fetch-laws.mjs --input ./scripts/docossum-dump.html
```

Файлы будут созданы в `src/content/laws/`, а индекс — в `src/data/laws-index.json`.

## Редактирование контента без кода

Владелец сайта меняет только Markdown и JSON:

- должность, семью и Discord — в `src/data/profile.json`
- уставы и памятки — в `src/content/factions/` и `src/content/memos/`
- законы — в `src/content/laws/`
- макросы — в `src/content/macros/*.json`
- статьи вики — в `src/content/wiki/`

После коммита GitHub Pages не нужен: Cloudflare Pages соберёт проект из репозитория автоматически.

## Сборка

```bash
npm run build
```

Сайт собирается как статический экспорт Astro. Контентные коллекции читаются на этапе сборки, поэтому все страницы доступны для индексации.

## Деплой на Cloudflare Pages

1. Залейте репозиторий на GitHub.
2. Откройте Cloudflare Dashboard → **Workers & Pages** → **Create application** → **Pages**.
3. Подключите GitHub-репозиторий.
4. Укажите:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Дождитесь первой сборки.
6. Перейдите в **Custom domains** и добавьте `zakonsentinel.ru`.
7. Следуйте мастеру DNS: Cloudflare покажет запись для привязки домена.
8. После обновления DNS проверьте, что HTTPS включён и домен открывает проект.

## Подсказки по содержимому

Если нужно заменить логотип, фон или favicon, правьте файлы в `public/brand/` и `public/bg/`.  
Если нужно добавить новый раздел, создайте новый Markdown/JSON-файл, а Astro сам подтянет его через коллекции.

## Команды

```bash
npm run dev
npm run parse-laws
npm run build
npm run preview
```

## Примечание

Typography, dark glass UI, gold accents, sidebar and motion-driven cards already wired into the layout. Replace any placeholder content with your own official text and assets when they are ready.
