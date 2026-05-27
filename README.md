# MarkLab — Site Institucional

Site institucional da **MarkLab**, estúdio criativo de comunicação, design, presença digital e materiais comerciais, criado por Marcelo Klassmann.

## Tecnologias

- HTML5 semântico
- CSS3 com variáveis customizadas (design tokens)
- JavaScript vanilla (sem frameworks)
- Font Awesome (ícones)
- Google Fonts (Inter)
- Design responsivo mobile-first
- Animações com Intersection Observer

## Estrutura de pastas

```
siteMarklab/
├── index.html          # Página principal (todas as seções)
├── css/
│   └── styles.css      # Estilos completos com variáveis CSS
├── js/
│   └── script.js       # Menu mobile, scroll, animações
└── README.md           # Este arquivo
```

## Como usar

### Opção 1 — Abrir direto no navegador

Abra o arquivo `index.html` em qualquer navegador moderno.

### Opção 2 — Servidor local (recomendado)

Com Python:

```bash
cd siteMarklab
python3 -m http.server 8000
```

Acesse `http://localhost:8000`

Com Node.js:

```bash
npx serve siteMarklab
```

## Como customizar

### Cores
Edite as variáveis em `:root` no arquivo `css/styles.css`.

### Textos e conteúdo
Todo o conteúdo está no `index.html`. As seções estão comentadas e organizadas.

### Imagens
O site usa placeholders com gradientes. Para adicionar imagens reais:
1. Substitua o conteúdo de `.project-card-image` por tags `<img>`
2. Ajuste a altura em `.project-card-image` no CSS

## Publicar na Vercel

1. Conecte o repositório na [Vercel](https://vercel.com)
2. Framework: **Other**
3. Diretório raiz: `siteMarklab` (ou onde estiver o `index.html`)
4. Output directory: deixe vazio

Pronto. O site está no ar.

## SEO

- Meta title e description configurados
- Tags semânticas (header, nav, section, article, footer)
- Atributos aria e roles de acessibilidade
- Heading hierarchy (h1 > h2 > h3)

## Licença

Todos os direitos reservados — MarkLab / Marcelo Klassmann.
