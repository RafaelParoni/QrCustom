# QR Custom 🟦🔲

[🇧🇷 Português](#-português) | [🇺🇸 English](#-english)

---

## 🇧🇷 Português

**QR Custom** é uma aplicação web moderna e minimalista (Single Page Application) desenvolvida em React para criar e gerenciar QR Codes personalizados. O projeto adota uma estética *glassmorphism* com suporte nativo a temas claros e escuros, além de suporte a múltiplos idiomas.

### 🌟 Funcionalidades
- **Geração Dinâmica de QR Codes:** Crie QR Codes instantaneamente para:
  - 🔗 URLs
  - 📝 Texto simples
  - ✉️ E-mails (Destinatário, Assunto, Corpo)
  - 📇 VCard (Contato completo para salvar na agenda)
  - 💬 WhatsApp / SMS (Número e mensagem)
  - 📍 Localização (Coordenadas de GPS)
  - 💸 Pagamento Pix (BR Code Payload válido)
  - 📅 Eventos (Formato iCal para calendário)
  - 📱 Lojas de Apps (App Store / Play Store)
  - 📶 Wi-Fi (Conexão automática de rede)
- **Logotipo Customizado:** Insira uma imagem ou logotipo no centro do seu QR Code sem comprometer a leitura (graças à alta correção de erro `Level H`).
- **Download Inteligente:** Baixe seus QR Codes em formato PNG com bordas perfeitas e nomes padronizados automaticamente (`TIPO-QR-CUSTOM.png`).
- **Temas e Idiomas:** Suporte nativo a Light/Dark Mode (salvo no `localStorage`) e interface em Português, Inglês e Espanhol.

### 🛠️ Tecnologias Utilizadas
- [React](https://reactjs.org/) (via Vite)
- Vanilla CSS (Design Responsivo e Glassmorphism)
- [qrcode.react](https://github.com/zpao/qrcode.react) (Geração nativa de QR Codes em Canvas)
- [react-icons](https://react-icons.github.io/react-icons/) (Ícones da interface)

### 🚀 Como executar o projeto localmente

1. Clone o repositório ou baixe o código.
2. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
3. Abra o terminal na pasta do projeto e instale as dependências:
   ```bash
   npm install
   ```
4. Crie um arquivo `.env` na raiz do projeto com os seus links sociais:
   ```env
   VITE_INSTAGRAM_URL=https://instagram.com/seu-perfil
   VITE_GITHUB_URL=https://github.com/seu-perfil
   ```
5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
6. Acesse a aplicação no seu navegador padrão pelo link fornecido no terminal (geralmente `http://localhost:5173`).

---

## 🇺🇸 English

**QR Custom** is a modern and minimalist Single Page Application (SPA) built with React to create and manage custom QR Codes. The project adopts a sleek *glassmorphism* aesthetic, natively supporting light and dark themes, as well as multi-language localization.

### 🌟 Features
- **Dynamic QR Code Generation:** Instantly generate QR Codes for:
  - 🔗 URLs
  - 📝 Plain Text
  - ✉️ Emails (Recipient, Subject, Body)
  - 📇 VCard (Complete contact for address books)
  - 💬 WhatsApp / SMS (Phone number and message)
  - 📍 Location (GPS coordinates)
  - 💸 Pix Payments (Valid BR Code Payload for Brazil's instant payment system)
  - 📅 Events (iCal format for calendar syncing)
  - 📱 App Stores (App Store / Play Store links)
  - 📶 Wi-Fi (Automatic network connection)
- **Custom Center Logo:** Embed an image or logo in the center of your QR Code without compromising scannability (thanks to `Level H` high error correction).
- **Smart Downloads:** Download your generated QR Codes as PNG files with perfect borders and auto-formatted names (`TYPE-QR-CUSTOM.png`).
- **Themes & Languages:** Native support for Light/Dark Mode (persisted via `localStorage`) and localization in Portuguese, English, and Spanish.

### 🛠️ Tech Stack
- [React](https://reactjs.org/) (bootstrapped with Vite)
- Vanilla CSS (Responsive Design & Glassmorphism)
- [qrcode.react](https://github.com/zpao/qrcode.react) (Native Canvas QR Code generation)
- [react-icons](https://react-icons.github.io/react-icons/) (UI Icons)

### 🚀 Running the project locally

1. Clone the repository or download the source code.
2. Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
3. Open your terminal in the project directory and install the dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory with your social links:
   ```env
   VITE_INSTAGRAM_URL=https://instagram.com/your-profile
   VITE_GITHUB_URL=https://github.com/your-profile
   ```
5. Start the Vite development server:
   ```bash
   npm run dev
   ```
6. Open your browser and navigate to the local link provided in the terminal (usually `http://localhost:5173`).
