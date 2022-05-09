# Projeto desenvolvido na NLW Return Impulse!

<br>

Nesse projeto vamos desenvolver um sistema de feedback com widget chamado de **Feedget**.

<br>

## Sobre o Feedget

O Feedget é um sistema de feedbacks construído para ser utilizado em diversos sites que queiram usar algum sistema de atendimento ou de feedback sobre os produtos que os sites oferecem, por exemplo.


<br>
<br>

## Motivação

A proposta neste projeto é por todos os nossos estudos em prática, além de poder aprender coisas novas no mundo do desenvolvimento web, como por exemplo o uso da tecnologia **tailwind css**, um framework destinado a facilitar e auxiliar os desenvolverdores front-end na estilização da interface do cliente/usuário. Nessa semana, busco ter um foco em melhorar mais os meus conhecimentos de backend, com as tecnologias que serão usadas no projeto (No primeiro dia, não foi falado muito sobre o que será feito no backend). Além disso, busco ter uma visão mais abrangente sobre como funciona o frontend usando o react, onde, também, será de bom proveito para compreender os comportamentos entre o front/back-end, e para o meu crescimento como desenvolvedor.

<br>

### **Observação**: Nesse projeto não está disponível a versão mobile. 

<br>

## Tecnologias

* [<font color=#00d8ff >React</font>](https://pt-br.reactjs.org/)
* [<font color=#3178c6 >TypeScript</font>](https://www.typescriptlang.org/)
* [<font color=#90c53f >NodeJs</font>](https://nodejs.org/en/)


<br>

### Frameworks/bibliotecas usadas no FrontEnd

* [<font color=#9d5dfe >ViteJs</font>](https://vitejs.dev/)
* [<font color=#38bdf8 >tailwindcss</font>](https://tailwindcss.com/)
* [<font color=#ffd171 >Phosphor Icons</font>](https://phosphoricons.com/)
* [<font color=#6f6cf9 >headlessui - A PROJECT BY Tailwind Labs </font>](https://headlessui.dev/)

<br>


### Frameworks/bibliotecas/middleware usadas no BackEnd

* [express](https://expressjs.com/pt-br/)
* [cors](https://expressjs.com/en/resources/middleware/cors.html)
* [nodemailer](https://nodemailer.com/about/)
* [@prisma/client](https://www.prisma.io/docs/concepts/components/prisma-client)
* [@railway/cli](https://docs.railway.app/)
* [yarn](https://yarnpkg.com/)
* [npm](https://www.npmjs.com/)
* [<font color=#90c53f >NodeJs</font>](https://nodejs.org/en/)


<br>

### Em relação ao banco de dados:
Os bancos de dados que foram usado nesse projeto foram o **sqlite**, usado no ambiente de desenvolvimento, e o **mongodb**, usado de fato na aplicação final do projeto (no caso no deploy do backend). Vale ser lembrado que o Diego optou em usar o **postgress** para o deploy do backend. Eu escolhi o mongodb por meus próprios motivos. Como estamos usando o **Prisma**, temos a facilidade de mudar o banco de dados do nosso projeto sem a necessidade de fazer grandes alterações no código do backend. 

<br>

### Deploy do Frontend e Backend

* O deploy para o FrontEnd do projeto foi feito no serviço chamado [Vercel](https://vercel.com/).
    
    - Link para acessar: [site](https://nlw-return-impulse-seven-sigma.vercel.app/) 

<br>
<br>

* O deploy para o Backend do projeto foi feito com o [Railway](https://railway.app/).

    - Nesse caso, não irei compartilhar o link de acesso do back para vocês por motivos de segurança. RECOMENDO que vocês façam o mesmo em seus projetos.





## Layout do projeto inteiro.

* [<font color=#f24e1e >Projeto no Figma com as Interfaces</font>](https://www.figma.com/file/KZUuV8Ghic8DU7oWKY9Tlp/Feedback-Widget-(Community)?node-id=113%3A2828)

<br>
<br>
<br>

## Instalar o projeto em sua máquina

<br>
<br>

### FRONTEND

Primeiramente faça o clone do projeto da seguinte forma:

````git
git clone https://github.com/Alysson-Araujo/nlw-return-impulse
````

Após isso, vá na pasta **frontend/web** e, no terminal, execute o seguinte script:

- Com npm

````git
npm install
````
- Com yarn

````git
yarn install
````

**Lembrando que você deve está com o node instalado em sua máquina**

<br>

Depois de instalar todos os módulos, execute esse comando no terminal para iniciar o frontend no modo de desenvolvedor:


- Com npm

````git
npm run dev
````

- Com yarn

````git
yarn dev
````

Pronto! o front está ativo. Agora vamos para o Backend

### Backend


Caso você já tenha feito o clone do projeto, não vai ser mais necessário fazer aqui. Caso não, primeiramente faça o clone do projeto da seguinte forma:

````git
git clone https://github.com/Alysson-Araujo/nlw-return-impulse
````

Após isso, vá na pasta **backend/server** e, no terminal, execute o seguinte script:

- Com npm

````git
npm install
````
- Com yarn

````git
yarn install
````

**Lembrando que você deve está com o node instalado em sua máquina**

<br>

<br>

Antes de executar o comando para inicializar o servidor backend em sua máquina, vá no arquivo schema.prisma em server/prisma e mude as configurações do banco de dados (escolha um que o prisma possua suporte) e configure ele seguindo as dicas que tem no site oficial do prisma. Recomendo usar um arquivo chamado **.env** para colocar informações delicadas sobre o banco de dados. NUNCA coloque esse arquivo em seu repositório. Dependendo do Banco de dados que você vá usar, será preciso aplicar as configurações da entidade feedbacks. No site do prisma ele fala como fazer isso com todos os banco de dados que ele trabalha. Segue 2 exemplos abaixo usando o yarn:

<br>

Se estiver usando o sqlite: 

````
yarn prisma migrate dev 
````

Se estiver usando o mongodb:

````
yarn prisma generate 
````

Depois de instalar todos os módulos, execute esse comando no terminal para iniciar o backend no modo de desenvolvedor:


- Com npm

````git
npm run dev
````

- Com yarn

````git
yarn dev
````

Se tudo dê certo, o banco de dados estará funcionando normalmente. Se você tiver algum banco de dados local em sua máquina. Você pode usar o prisma studio para acessar os dados que vão para o banco de dados com o seguinte script:

- Com npx

````git
npx prisma studio
````

- Com yarn

````git
yarn prisma studio
````

<br>
<br>
<br>

Bem, é isso. Aproveite o projeto! Em caso de uso em seu site ou projeto. Por favor, entre em contato pelo email alyssonaraujo@alu.ufc.br.
