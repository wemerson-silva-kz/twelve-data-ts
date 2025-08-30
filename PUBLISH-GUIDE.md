# Manual de Publicação NPM - Twelve Data TypeScript Library

## 📋 Pré-requisitos

1. **Conta NPM**: Tenha uma conta em [npmjs.com](https://www.npmjs.com/)
2. **CLI NPM**: Tenha o npm CLI instalado
3. **Login**: Esteja logado no npm via CLI

```bash
npm login
```

## 🚀 Processo de Publicação Automática

### 1. Verificar Build
```bash
bun run build
```

### 2. Publicar no NPM
```bash
npm publish
```

O script `prepublishOnly` irá automaticamente fazer o build antes da publicação.

## 🔧 Processo Manual Detalhado

### 1. Preparar o Ambiente
```bash
# Instalar dependências
bun install

# Fazer build
bun run build

# Verificar se os arquivos estão corretos
ls -la dist/
```

### 2. Verificar Package.json
- ✅ Nome único no NPM
- ✅ Versão correta
- ✅ Descrição adequada
- ✅ Autor e licença
- ✅ Keywords relevantes
- ✅ Repository URL (se disponível)

### 3. Testar Localmente
```bash
# Testar instalação local
npm pack
npm install ./twelve-data-ts-1.0.0.tgz

# Ou usar npm link
npm link
cd /path/to/test/project
npm link twelve-data-ts
```

### 4. Publicar
```bash
# Primeira publicação
npm publish

# Publicações futuras (após atualizar version no package.json)
npm version patch  # 1.0.0 → 1.0.1
npm version minor  # 1.0.0 → 1.1.0
npm version major  # 1.0.0 → 2.0.0
npm publish
```

## 📦 Arquivos Incluídos no Pacote NPM

De acordo com o `.npmignore`, serão incluídos:
- ✅ `dist/` - Código compilado
- ✅ `README.md` - Documentação
- ✅ `LICENSE` - Licença
- ✅ `package.json` - Metadados

Serão excluídos:
- ❌ `src/` - Código fonte TypeScript
- ❌ `test*.ts` - Arquivos de teste
- ❌ `node_modules/` - Dependências
- ❌ `*.html` - Documentação HTML
- ❌ Arquivos de configuração de desenvolvimento

## 🔍 Verificações Finais

### 1. Tamanho do Pacote
```bash
npm pack --dry-run
```

### 2. Conteúdo do Pacote
```bash
tar -tzf twelve-data-ts-1.0.0.tgz
```

### 3. Testar Import
```bash
node -e "const TwelveData = require('twelve-data-ts'); console.log('Import successful!');"
```

## 📈 Versionamento Semântico

- **PATCH** (1.0.0 → 1.0.1): Bug fixes
- **MINOR** (1.0.0 → 1.1.0): New features (backward compatible)
- **MAJOR** (1.0.0 → 2.0.0): Breaking changes

## 📋 Checklist de Publicação

- [ ] ✅ Build realizado com sucesso
- [ ] ✅ Testes passando (se aplicável)
- [ ] ✅ README.md atualizado
- [ ] ✅ Versão incrementada no package.json
- [ ] ✅ Logado no NPM (`npm whoami`)
- [ ] ✅ Nome único verificado (`npm view twelve-data-ts`)
- [ ] ✅ Arquivos corretos no pacote (`npm pack --dry-run`)
- [ ] 🚀 **PUBLICAR**: `npm publish`

## 🔄 Atualizações Futuras

Para atualizar a library:

1. Fazer mudanças no código
2. Atualizar versão: `npm version [patch|minor|major]`
3. Fazer build: `bun run build`
4. Publicar: `npm publish`

## 🐛 Solução de Problemas

### Erro: Package já existe
```bash
# Verificar se o nome está disponível
npm view twelve-data-ts

# Se já existe, mudar o nome no package.json
```

### Erro: Não autorizado
```bash
# Verificar login
npm whoami

# Fazer login novamente
npm login
```

### Erro: Arquivos faltando
```bash
# Verificar .npmignore
cat .npmignore

# Verificar conteúdo do pacote
npm pack --dry-run
```

## 📊 Estatísticas do Pacote

**Twelve Data TypeScript Library v1.0.0**
- 🎯 **154 endpoints** (100% coverage)
- 🔧 **98 technical indicators**
- 📦 **Zero dependencies**
- 🚀 **Bun optimized**
- 📝 **Full TypeScript support**
- ⚡ **Automatic rate limiting**

## 🎉 Pós-Publicação

Após a publicação bem-sucedida:

1. ✅ Verificar no [npmjs.com](https://www.npmjs.com/package/twelve-data-ts)
2. ✅ Testar instalação: `npm install twelve-data-ts`
3. ✅ Verificar downloads e estatísticas
4. ✅ Promover nas redes sociais/comunidades relevantes
5. ✅ Documentar em repositórios/blogs pessoais

---

**🎯 Ready to publish! Sua library está pronta para o mundo! 🌍**
