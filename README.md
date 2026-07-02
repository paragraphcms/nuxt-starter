# ParagraphCMS Nuxt Starter

Ten README jest krótką dokumentacją projektu ParagraphCMS dla przykładu Nuxt Starter. Projekt pokazuje podstawową integrację Nuxt: strony w `app/pages/blog`, serwerowe endpointy Nitro w `server/api` i renderowanie treści przez `@paragraphcms/parser-vue`.

Oficjalny kontekst: [ParagraphCMS Nuxt Quickstart](https://paragraphcms.com/docs/quickstart/nuxt).

## Konfiguracja

1. Skopiuj `.env.example` do `.env`.
2. Ustaw `NUXT_PARAGRAPH_API_KEY` kluczem API z ParagraphCMS.
3. Wpisy powinny mieć slug, bo trasa `app/pages/blog/[slug].vue` pobiera wpis po slug.

## Uruchomienie

```bash
pnpm install
pnpm dev
```

Build/generowanie i podgląd:

```bash
pnpm build
pnpm preview
```

Do statycznego generowania użyj:

```bash
pnpm generate
```

## Najważniejsze pliki

- `server/utils/paragraph.ts` - serwerowy klient ParagraphCMS.
- `server/api/blog.get.ts` - lista wpisów.
- `server/api/blog/[slug].get.ts` - pojedynczy wpis.
- `app/components/blog/` - komponenty listy i pojedynczego wpisu.
