Pages:

> > Home.Page.jsx (Default.Hoc.jsx)
> > Movie.Page.jsx(movie.Hoc.jsx)
> > PLay.Page.jsx (Default.Hoc.jsx)

HOC's/Layouts:

> > Default.Hoc.jsx
> > movie.Hoc.jsx

Components:

> > Cast.Component.jsx
> > EntertainmentCard.Component.jsx
> > HeroCarousel.Component.jsx >> Arrows.Component.jsx
> > MovieHero.Component.jsx >> MovieInfo.Component.jsx
> > NavBar.Component.jsx >> MovieNavbar.Component.jsx
> > PaymentComponent.jsx
> > PlayFilters >> Filters.Components.jsx
> > Poster.Component.jsx
> > PosterSliderComponent.jsx

<!-- When you don't want to write cd again and again to go into the project after creating it using npx create-react-app (projectname) the use the ommand below  -->

npx create-react-app .

<!-- Download Tailwind -->

npm install -D tailwindcss postcss autoprefixer (postcss autoprefixer is used for advance features)

> > Install Tailwind
> > Install React slick
> > Install Axios (used for http request)
> > Install headless UI from the tabs section
> > Install react icons
> > Install react-router-dom (for dealing with routes)

<!-- Movie DB API -->

https://api.themoviedb.org/3/movie/550?api_key=74f17c856f892fd0f55a2772836c94ac

## DevOps

Dev => Development Team
Ops => Operation Team

Devops and CICD (Docker & Kubernetes)
git

Docker >> EC2 Instance >> Img and Container
Image(Parent)
Containers(Child) || Server

Kubernetes (Orchestra)

    >> Docker Deamon ---> Server (Initialization)
    >> Docker Clients ----> Client
    >> Docker Swarm -----> Orchestra (main | master node)

    Child Node
    >>Child NOde
        >> POD (Container)
        >> Development (Where it will keep close eye on POD)

Eg: I want to run a server in the docker with 3 conatiners on my book my show app

Docker:

> > Image

    > > Container1
    > > Container2
    > > Container3

Kubernetes: >> Master NOde >> Child Node | POD-1 (POD is the server) >> Child Node | POD-2 >> Child Node | POD-3

Master Node
Child Node- 1 -- Child Node- 2 -- Child Node- 3 -- Development

Development: Analize and maintain all the PODs/Child Nodes/Servers/ Containers

> > Nodes >>

            > > Master Node (A person holding stick in Orchestra event | Lead)
            > > Child Node ( A group of people following the lead)

> > NGINX (Light weight servers)

> > Amazon Elastic Compute Cloud

Docker >> Image >> Containers

Client Server Architecture

AWS

    >> Service: EC2 (Virtual Machine)=> Unix OS
    Base OS >> Windows

NGINX (Light Weight Server)

        >> Reverse Proxy
        >> Load Balancing
