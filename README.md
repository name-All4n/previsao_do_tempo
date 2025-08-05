# ⛅ Aplicativo de Previsão do Tempo

Este é um aplicativo web simples de **previsão do tempo**, onde o usuário digita o nome de uma cidade e visualiza as informações meteorológicas em tempo real, como **temperatura, clima e umidade**. Os dados são fornecidos pela API gratuita da [OpenWeather](https://openweathermap.org/).

---

## 📸 Preview

<img width="685" height="409" alt="image" src="https://github.com/user-attachments/assets/54e1aaf4-a49d-4c3e-b2d1-4d3b66d5e54b" />

> Interface simples, bonita e com fundo dinâmico.
> Ideal para praticar requisições com `fetch()` e manipulação de DOM com JavaScript.

---

## 📌 Funcionalidades

- Consulta do clima atual de qualquer cidade
- Exibição de:
  - Nome da cidade
  - Temperatura
  - Descrição do clima
  - Umidade relativa do ar
  - Ícone representando o clima atual
- Interface moderna com fundo e layout responsivo

---

## 🧱 Estrutura do Projeto

```
/weather-app
│
├── index.html        # Estrutura principal da aplicação
├── styles.css        # Estilo da interface
├── scripts.js        # Funções JS, integração com API e eventos
```

---

## 🛠 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeather API
- Google Fonts (Open Sans)

---

## 🔑 Como obter sua API Key

1. Acesse: https://openweathermap.org/api
2. Crie uma conta (gratuita)
3. Vá em **API keys** e copie sua chave
4. Substitua a variável `key` no `scripts.js`:
```js
const key = "SUA_CHAVE_AQUI";
```

---

## 🚀 Como Executar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/name-All4n/weather-app.git
```

2. Navegue até o diretório:
```bash
cd weather-app
```

3. Abra o `index.html` no navegador:
```bash
start index.html  # Windows
open index.html   # macOS
```

---

## 💡 Possíveis Melhorias

- Prevenção de erros com cidade inválida
- Detecção automática de localização via navegador
- Troca de fundo de acordo com o clima

---

## 👨‍💻 Autor

Desenvolvido por [Allan Pedro](https://github.com/name-All4n) como projeto de prática em integração com API REST e front-end puro.

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.
