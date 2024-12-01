# Projeto Angular Bootstrap OpenLibrary 

## Descrição

Este é um projeto desenvolvido em Angular que utiliza Bootstrap para estilização e a API OpenLibrary para buscar informações sobre livros. Ele tem como objetivo permitir que os usuários pesquisem títulos, autores ou categorias e obtenham detalhes sobre obras literárias.

## Funcionalidades

- **Pesquisa de livros:** Busca interativa utilizando a API OpenLibrary.
- **Exibição de detalhes:** Mostra informações como título, autor, capa e descrição.
- **Interface responsiva:** Desenvolvido com Bootstrap para garantir compatibilidade com dispositivos móveis.

## Tecnologias Utilizadas

- **Angular:** Framework principal para desenvolvimento frontend.
- **Bootstrap:** Biblioteca de estilização responsiva.
- **API OpenLibrary:** Fonte de dados para informações sobre livros.

## Instalação e Execução

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/angular-bootstrap-openlibrary.git
   cd angular-bootstrap-openlibrary
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   ng s
   ```

   O projeto estará disponível em `http://localhost:4200`.

## Estrutura do Projeto

```
src/
  app/
    components/
      header/
      footer/
    pages/
      catalogo/
      detalhes-livro/
      home/
    services/
      api/
    pipes
      filtrar-resultados/
    directives/
      text-overflow-ellipsis/
      
```

- **components/**: Contém os componentes da aplicação.
- **services/**: Inclui serviços para interação com a API OpenLibrary.
- **assets/**: Contém estilos personalizados e outros recursos estáticos.
- **environments/**: Configurações de ambiente (ex.: chaves da API).

## Configuração da API

1. Acesse a documentação oficial da [OpenLibrary API](https://openlibrary.org/developers/api).
2. Certifique-se de que as URLs de requisições estão corretas no serviço `api.service.ts`.

Exemplo de URL base:

```typescript
const API_URL = 'https://openlibrary.org/search.json';
```

## Estilização

Bootstrap foi utilizado para garantir responsividade. Classes personalizadas podem ser adicionadas no arquivo `custom.css` em `src/assets/styles/`.

Exemplo de uso do Bootstrap:

```html
<div class="container mt-4">
  <div class="row">
    <div class="col-md-6">
      <h1>Biblioteca Online</h1>
    </div>
  </div>
</div>
```

## Contribuição

1. Fork este repositório.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Envie suas modificações:
   ```bash
   git commit -m "Adicionei uma nova feature"
   git push origin minha-feature
   ```
4. Abra um Pull Request.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

---

Feito por [Seu Nome].

