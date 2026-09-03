# 🤖 Gerador de Sites por IA

Aplicação web capaz de gerar páginas completas utilizando **Inteligência Artificial a partir de um único prompt**.

O usuário descreve o negócio ou projeto que deseja criar e a aplicação envia essa descrição para a **API da Groq**, utilizando o modelo **Llama 3.3 70B**. A IA então gera uma página HTML completa, com CSS e JavaScript, que é exibida diretamente na aplicação.

## 🚀 Demonstração

O funcionamento é simples:

1. O usuário descreve o site que deseja criar.
2. A aplicação envia o prompt para a API da Groq.
3. O modelo de IA gera o código HTML, CSS e JavaScript.
4. O código gerado é exibido na tela.
5. Uma prévia do site é renderizada automaticamente em um `iframe`.

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- API REST
- Groq API
- Llama 3.3 70B
- Fetch API
- iframe / srcdoc

## 💡 Funcionalidades

- Geração de sites através de prompts;
- Integração com API de Inteligência Artificial;
- Geração automática de HTML, CSS e JavaScript;
- Exibição do código gerado;
- Pré-visualização do site em tempo real;
- Interface simples e responsiva.

## 🧠 Como funciona

A aplicação utiliza JavaScript para realizar uma requisição `POST` para a API da Groq.

O prompt informado pelo usuário é enviado juntamente com uma instrução para que a IA atue como um desenvolvedor Front-End e gere uma landing page completa.

Depois que a API retorna a resposta, o código gerado é:

- exibido no bloco de código da interface;
- enviado para o atributo `srcdoc` de um `iframe`, permitindo visualizar o site gerado.

### Fluxo da aplicação

```text
Usuário
   ↓
Descrição do site
   ↓
JavaScript
   ↓
Groq API
   ↓
Llama 3.3 70B
   ↓
HTML + CSS + JavaScript
   ↓
┌─────────────────────┐
│ Código gerado       │
│        +            │
│ Prévia do site      │
└─────────────────────┘
