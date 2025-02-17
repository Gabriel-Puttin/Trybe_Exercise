FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
WORKDIR /app

# Copiar os arquivos do projeto para o container
COPY . ./

# Restaurar as dependências do projeto
RUN dotnet restore

# Instalar a ferramenta dotnet-ef
RUN dotnet tool install --global dotnet-ef --version 7.0.3

# Adicionar o diretório global de ferramentas ao PATH
ENV PATH="$PATH:/root/.dotnet/tools"

# Adicionar a migração inicial
RUN dotnet ef migrations add InitialCreate

# Atualizar o banco de dados
RUN dotnet ef database update

# Publicar a aplicação
RUN dotnet publish -c Release -o out

# Segunda etapa: imagem runtime
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app

# Copiar os arquivos publicados para a imagem final
COPY --from=build-env /app/out .

# Configurar o ponto de entrada
ENTRYPOINT ["dotnet", "ContactList.dll"]
