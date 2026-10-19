# Arquitetura de software e gestão de projetos

Site que explica três conceitos de arquitetura de software, a partir de artigos do martinfowler.com, e mostra como cada um afeta a gestão de um projeto: prazo, custo, equipe e riscos.

**Acesse o site:** https://matheusdevsant.github.io/site_gestao/

## Integrantes

- Anne Carlini
- Matheus Santos

## O que o site traz

Cada conceito tem uma página própria, com:

1. Um resumo da ideia central do artigo, nas nossas palavras.
2. As vantagens e as desvantagens apontadas pelo autor.
3. O impacto na gestão do projeto: prazo, custo, equipe e riscos.
4. O link para o artigo original.

| Conceito | Autor | Artigo original |
| --- | --- | --- |
| Microservices | James Lewis e Martin Fowler | https://martinfowler.com/articles/microservices.html |
| Micro Frontends | Cam Jackson | https://martinfowler.com/articles/micro-frontends.html |
| Serverless Architectures | Mike Roberts | https://martinfowler.com/articles/serverless.html |

## Tecnologias

HTML e CSS puros, sem frameworks e sem etapa de build. Publicado no GitHub Pages.

## Estrutura do projeto

├── index.html página inicial, com os integrantes e os links
├── microservices.html
├── micro-frontends.html
├── serverless.html
└── css/
└── style.css


## Declaração de uso de IA

Usamos o Claude (Anthropic) como apoio para montar o código do site (HTML e CSS). Os resumos e a análise de impacto na gestão foram escritos pela equipe e conferidos contra os artigos originais.

## Como publicar no GitHub Pages

1. Crie um repositório **público** no GitHub (por exemplo, `site_gestao`).
2. Envie os arquivos do site para a raiz do repositório. Pelo terminal:

git init
git add .
git commit -m “Primeira versão do site”
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
git push -u origin main

3. No repositório, abra **Settings > Pages**.
4. Em **Source**, escolha **Deploy from a branch**.
5. Em **Branch**, selecione `main` e a pasta `/ (root)`, e clique em **Save**.
6. Aguarde de 1 a 3 minutos. O endereço do site aparece no topo da página de Pages, no formato:
   `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`

### Para atualizar o site

Depois de editar qualquer arquivo, rode:

git add .
git commit -m “Descrição da alteração”
git push


O site é atualizado automaticamente em poucos minutos.
