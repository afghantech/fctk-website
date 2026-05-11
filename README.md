# Сайт факультета ЦТМК (ОмГУ)

Современный веб-сайт факультета цифровых технологий, математики и кибербезопасности: образовательные программы, новости, научная деятельность, структура и контакты.

## Стек

- **Next.js** 16
- **React** 19, **TypeScript**
- **Tailwind CSS** 4, **@tailwindcss/typography**
- Контент: **gray-matter**, **remark**, **remark-html**
- Тесты: **Jest**, **@testing-library/react**, jsdom, E2E Playwright

## Требования

- **Node.js** 20

## Локальный запуск

```bash
npm ci
npm run dev
```

Сайт по умолчанию: [http://localhost:3000](http://localhost:3000).

Продакшн-сборка и запуск:

```bash
npm run build
npm start
```

## Переменные окружения

| Переменная | Назначение |
|------------|------------|
| `NEXT_PUBLIC_SITE_URL` | Канонический URL сайта подставляется на **этапе сборки**. |
| `NEXT_PUBLIC_YANDEX_METRIKA_ID` | Идентификатор счётчика Яндекс.Метрики встраивается в клиент при сборке. |

Переменные с префиксом `NEXT_PUBLIC_` в Next.js попадают в клиентский бандл во время `next build`. После сборки сменить их только через переменные окружения контейнера **нельзя** нужна пересборка образа.

## Docker

Сборка и запуск через Compose, аргументы сборки можно задать в `.env` рядом с `docker-compose.yml` или в окружении:

```bash
export NEXT_PUBLIC_SITE_URL=https://example.org
export NEXT_PUBLIC_YANDEX_METRIKA_ID=12345678
docker compose build
docker compose up -d
```

Порт хоста по умолчанию: `3000`.

## Тесты и линтер

```bash
npm test              # один прогон Jest
npm run test:watch    # режим наблюдения
npm run test:coverage # с отчётом покрытия 
npm run lint          # ESLint
npx playwright test   # E2E-тестирование
```

---
