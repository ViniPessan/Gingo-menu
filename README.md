# 🍔 Gingo Menu - Cardápio Digital

**Cardápio digital oficial da Gingo Hamburgueria** - Uma aplicação web **real e em produção**, desenvolvida com Next.js 15 para uso comercial efetivo do restaurante.

> ✅ **Projeto 100% funcional** | 🚀 **Em produção** | 📱 **Totalmente responsivo**

## 🌐 Aplicação em Produção

**🔗 [Acesse o cardápio oficial: gingo-menu.netlify.app](https://gingo-menu.netlify.app/)**

> 💡 **Nota**: O projeto está completo e funcionando perfeitamente. As imagens dos burgers são placeholders temporários - as **fotos profissionais dos produtos** serão adicionadas em breve.

## 📸 Preview

### Desktop
Algumas imagens do projeto, responsivo para todas as telas.

<img width="1898" height="877" alt="gingo" src="https://github.com/user-attachments/assets/876a9300-4013-4b5c-a373-bdc6715943c6" />

<img width="1898" height="881" alt="burguers" src="https://github.com/user-attachments/assets/bfa13039-43f3-4697-a89e-25fe6ba40ed3" />

<im<img width="1899" height="879" alt="cardapio" src="https://github.com/user-attachments/assets/6dc23783-903c-44c1-9202-9e7d1f4e1fc6" />

<img width="1900" height="885" alt="footer" src="https://github.com/user-attachments/assets/21e102ae-a560-42fc-8edb-1509a6486e65" />

<img width="535" height="765" alt="Sem título" src="https://github.com/user-attachments/assets/6844d43b-37c0-4ab0-8f95-d079cd5a5d5d" />



## 🚀 Características

- ✅ **Projeto Real em Produção**: Cardápio oficial usado pelo restaurante
- 📱 **Design Responsivo**: Interface adaptável para todos os dispositivos
- ⚡ **Performance Otimizada**: Construído com Next.js 15 e Turbopack
- 🎨 **Interface Moderna**: Design glassmorphism com efeitos visuais premium
- 📞 **Integração WhatsApp**: Pedidos diretos via WhatsApp Business
- 🔤 **Tipografia Customizada**: Fonte Fredericka the Great para identidade visual
- 🚀 **SEO Otimizado**: Meta tags e estrutura semântica para buscadores
- 💰 **Sistema de Preços Dinâmico**: Valores organizados e destacados

## 📱 Funcionalidades Implementadas

> **Status**: Todas as funcionalidades estão **100% operacionais** em produção

### Cardápio Completo
- ⭐ **Burger do Mês**: Destaque especial com promoção atual
- 🍔 **Menu de Burgers**: 10 opções artesanais com ingredientes detalhados
- ➕ **Adicionais**: 12 opções de personalização (queijos, bacon, molhos, etc.)
- 🍟 **Porções**: 8 opções de petiscos e acompanhamentos
- 🥤 **Bebidas**: Refrigerantes, sucos, águas e energéticos
- 🍻 **Cervejas**: 9 variedades (lata, long neck, 600ml)
- 🍹 **Drinks**: 6 coquetéis alcoólicos artesanais
- 🍰 **Sobremesas**: Doces e sobremesas especiais
- 🥃 **Bebidas da Casa**: 2 especialidades exclusivas (Pink Lemonade, Sodas)

### Recursos Comerciais
- 📞 **Pedidos Diretos**: Integração com WhatsApp Business (18) 99821-7272
- 📍 **Informações Completas**: Endereço, horários e formas de contato
- 📱 **Redes Sociais**: Links diretos para Instagram oficial
- 💲 **Preços Atualizados**: Valores reais e atuais do restaurante
- 🕐 **Horário de Funcionamento**: Terça/Quarta (delivery) | Quinta-Domingo (presencial + delivery)

## 🛠️ Tecnologias Utilizadas

- **Framework**: Next.js 15.3.4 com App Router
- **Runtime**: React 19
- **Linguagem**: TypeScript
- **Estilização**: 
  - Tailwind CSS 4
  - SASS/SCSS modules
  - CSS personalizado com backdrop-filter
- **Ícones**: Font Awesome (React)
- **Fontes**: Google Fonts (Geist, Fredericka the Great)
- **Build**: Turbopack (modo desenvolvimento)

## 📦 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── styles.module.scss # Estilos específicos da página
├── components/            # Componentes reutilizáveis
│   ├── additionalMenu/    # Menu de adicionais
│   ├── alcoholicDrinksMenu/
│   ├── beersMenu/
│   ├── burgerMenu/        # Menu principal de burgers
│   ├── burgerOfMounthMenu/ # Burger em destaque
│   ├── dessertMenu/
│   ├── drinksMenu/
│   ├── footer/            # Rodapé com contatos
│   ├── header/            # Cabeçalho com logo
│   ├── houseDrinksMenu/
│   ├── menuSection/       # Componente genérico de seção
│   └── portionsMenu/
├── data/                  # Dados dos produtos
│   ├── additionals.ts
│   ├── alcoholicDrinks.ts
│   ├── beers.ts
│   ├── burger.ts
│   ├── desserts.ts
│   ├── drinks.ts
│   ├── houseDrinks.ts
│   └── portions.ts
└── types/                 # Definições TypeScript
    ├── menu.ts
    └── product.ts
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm, yarn, pnpm ou bun

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/gingo-menu.git
   cd gingo-menu
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Acesse a aplicação**
   ```
   http://localhost:3000
   ```

## 📱 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento com Turbopack
- `npm run build` - Cria build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa verificação ESLint

## 🎨 Design System

### Paleta de Cores
- **Primária**: Dourado (`rgb(255, 227, 70)`) - Preços em destaque
- **Fundo**: Preto com gradiente transparente
- **Texto**: Branco e tons de cinza
- **Acentos**: Glassmorphism com `backdrop-filter: blur(7px)`

### Tipografia
- **Títulos**: Fredericka the Great (serif decorativa)
- **Corpo**: Geist Sans (sans-serif moderna)
- **Monospace**: Geist Mono

### Responsividade
Breakpoints principais:
- Desktop: 1310px+
- Tablet: 641px - 1309px
- Mobile: até 640px
- Mobile pequeno: até 375px

## 🔧 Personalização

### Adicionando Novos Produtos

1. **Edite o arquivo de dados correspondente** em `src/data/`
2. **Siga a interface TypeScript**:
   ```typescript
   interface Produto {
     id: number;
     nome: string;
     ingredientes?: string;
     preço: number;
     imagem: string;
   }
   ```

### Modificando Estilos
- **Estilos globais**: `src/app/globals.css`
- **Componentes**: Cada componente possui seu arquivo `.module.scss`
- **Tailwind**: Classes utilitárias para responsividade

## 📈 Performance

- **Next.js 15**: Otimizações automáticas de performance
- **Turbopack**: Build mais rápido em desenvolvimento
- **Image Optimization**: Componente `next/image` para imagens otimizadas
- **CSS Modules**: Estilos com escopo local
- **Tree Shaking**: Apenas código necessário no bundle final

## 🌐 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push na branch principal

### Netlify
A aplicação atual está hospedada na Netlify:
- **URL**: [https://gingo-menu.netlify.app/](https://gingo-menu.netlify.app/)
- Deploy automático via Git
- HTTPS habilitado automaticamente

### Outros Provedores
A aplicação é compatível com qualquer provedor que suporte Node.js:
- Netlify
- Railway
- Heroku
- DigitalOcean App Platform

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Contato

- **Desenvolvedor**: [Vinicius Pessan](https://portifoliovpr.netlify.app)
- **Restaurante**: Gingo Hamburgueria
- **WhatsApp**: (18) 99821-7272
- **Instagram**: [@gingohamburgueria](https://instagram.com/gingohamburgueria)

---

<div align="center">
  <p>Desenvolvido com ❤️ por <a href="https://portifoliovpr.netlify.app">Vinicius Pessan</a></p>
</div>
