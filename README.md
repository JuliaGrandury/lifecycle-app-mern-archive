<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/JuliaGrandury/lifecycle-app-mern">
    <img src="https://img.icons8.com/external-linector-flat-linector/64/000000/external-hang-clothes-personal-hygiene-linector-flat-linector.png" width="80" height="80"/>
  </a>

  <h3 align="center">Lifecycle</h3>

  <p align="center">
    An awesome app to track your closet and organize swaps and borrows with friends!
    <br />
    <a href="https://github.com/JuliaGrandury/lifecycle-app-mern"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/JuliaGrandury/lifecycle-app-mern">View Demo</a>
    ·
    <a href="https://github.com/JuliaGrandury/lifecycle-app-mern/issues">Report Bug</a>
    ·
    <a href="https://github.com/JuliaGrandury/lifecycle-app-mern/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

**TLDR**; LifeCycle allows users to partake in fashion in a sustainable manner for the planet and their wallets. Features include:
- Uploading their closets to the web
- Sharing their closet virtually with a circle of friends
- Submitting borrow or swap requests to friends
- Tracking items that are "out of closet" for loans or repairs
- Add a wishlist of items their circle can view

The fashion sector was responsible for about 2.1 billion metric tons of greenhouse-gas (GHG) emissions in 2018, which is 4 percent of the global total. For context, this means it emits about the same quantity of GHGs per year as the **entire economies of France, Germany, and the United Kingdom combined**. - [McKinsey Research](https://www.mckinsey.com/industries/retail/our-insights/fashion-on-climate)
- "93% of brands surveyed by the Fashion Checker aren’t paying garment workers a living wage" [Fashion Check, 2020](https://fashionchecker.org/)
- “Clothing production is the third biggest manufacturing industry after the automotive and technology industries. Textile production contributes more to climate change than international aviation and shipping combined” [House of Common Environmental Audit Committee, 2019](https://publications.parliament.uk/pa/cm201719/cmselect/cmenvaud/1952/1952.pdf)
- “More than $500 billion of value is lost every year due to clothing underutilization and the lack of recycling” [Ellen MacArthur Foundation, 2017](https://www.ellenmacarthurfoundation.org/)
- “One in three young women, the biggest segment of consumers, consider garments worn once or twice to be old” [The Guardian, 2019](https://www.theguardian.com/fashion/2019/jun/21/fast-fashion-is-on-the-rampage-with-uk-at-the-head-of-the-charge)
- “Fast fashion brands use open-loop production cycles that pollute water and land” [The New York Times, 2019](https://www.nytimes.com/2019/09/03/books/review/how-fast-fashion-is-destroying-the-planet.html)
- “The fashion industry is responsible for 8% of carbon emissions” [UN Environment, 2019](https://www.unenvironment.org/news-and-stories/press-release/un-alliance-sustainable-fashion-addresses-damage-fast-fashion)
- "The effort that fast fashion brands put into sustainable production measures is decreasing” [Global Fashion Agenda, 2019](https://globalfashionagenda.com/pulse-2019-update/)
- “Less than 11% of brands are implementing recycling strategies for their items” [Peppermint Magazine, 2019](https://peppermintmag.com/2019-ethical-fashion-report/)
- “Three out of five fast fashion items end up in a landfill” [Clean Clothes Campaign, 2019](https://cleanclothes.org/fashions-problems/waste-and-pollution)
- “Worker rights of fast fashion employees are strongly violated” [Euronews, 2019](https://www.euronews.com/living/2019/04/29/is-fast-fashion-slowing-down)
- “Washing, solvents, and dyes used in manufacturing are responsible for one-fifth of industrial water pollution” [McKinsey, 2020](https://www.mckinsey.com/industries/retail/our-insights/the-state-of-fashion-2020-navigating-uncertainty#)
- “Nearly 70 million barrels of oil are used each year to make the world’s polyester fiber, which is now the most commonly used fiber in our clothing. But it takes more than 200 years to decompose.” [Forbes, 2015](https://www.forbes.com/sites/jamesconca/2015/12/03/making-climate-change-fashionable-the-garment-industry-takes-on-global-warming/#3da6b7d579e4)
- "Fashion accounts for 20 to 35 percent of microplastic flows into the ocean." [The State of Fashion, McKinsey 2020](https://www.mckinsey.com/industries/retail/our-insights/the-state-of-fashion-2020-navigating-uncertainty#)

Lifecycle is meant to help users organize and keep track of what they own in order to avoid unnecessary purchases. Not only that but it is also meant to encourage and facilitate swaps and exchanges of clothing between friends and family. The philosophy behind it? Humans thrive on novelty. Our midbrain (particularly the substantia nigra/ventral segmental area) responds to novel stimuli by directly activating the dopaminergic system in our brain. In other words, it makes us feel good. But we don't need to buy new clothes in order to produce that reaction. Borrowing an item from a friend's closet or lending an item, forgetting about it and then getting it back a couple of weeks later can produce the same reaction. Absence makes the heart grow fonder and sometimes that is all we need to want to wear our favorite items again. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With
* [MongoDB](https://www.mongodb.com/)
* [Express.js](https://expressjs.com/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Node.js](https://nodejs.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started with LifeCycle

1. Download the code zip by clicking on the green "Code" button > Download Zip or clone the repository by doing 
   ```sh
   git clone https://github.com/JuliaGrandury/lifecycle-app-mern.git
   ```
2. Install NPM packages
   ```sh
   npm install bcryptjs colors dotenv express express-async-handler jsonwebtoken mongoose
   ```
3. Install NPM dev dependencies
   ```sh
   npm install concurrently nodemon
   ```
4. Create a .env file to store your MONGO_URI, JWT_SECRET and set NODE_ENV = development
5. Create a MongoDB Database, get your MONGO_URI and store it in your .env file
- Go to [mongodb.com](https://www.mongodb.com/) to create an account and follow this [tutorial](https://www.youtube.com/watch?v=-PdjUx9JZ2E)
- Note: if during development you receive a "MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster." One common reason is that you're trying to access the database from an IP that isn't whitelisted. Make sure your current IP address is on your Atlas cluster's IP whitelist: https://docs.atlas.mongodb.com/security-whitelist/". On MongoDB Atlas Dashboard > Network Access > Edit > Add Current IP Address

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap
- [ ] add two tabs in header "Closets" and "Outfits"
- [ ] add subtabs of "Closets": My Closet, X Closet, Y Closet
- [ ] add subtab of "My Closet": Out of Closet (swap, lent, repair) and In Closet
- [ ] add subtabs of "Outfits": Saved Outfits, Inspo Outfits
- [ ] add pack a suitcase feature
- [ ] add item categories for sorting (Tops, Bottoms, Shoes, Accessories, etc)
- [ ] add wishlist of new items

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Adding AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Julia Grandury - booleanjules@gmail.com

Project Link: [https://github.com/JuliaGrandury/lifecycle-app-mern](https://github.com/JuliaGrandury/lifecycle-app-mern)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LESSONS LEARNED -->
<details>
  <summary>Overview of Lessons Learned</summary>
  <ol>
    <li>The intricacies of complete CRUD functionality with MERN [resource](https://www.youtube.com/watch?v=I7EDAR2GRVo)</li>
    <li>Authentication and storing user information safely with Hashing and Salts in Bcrypt.js [resource](https://www.youtube.com/watch?v=ro1WmoP4CZs)</li>
    <li>Authorization and protecting routes with JSON Web Tokens [resource](https://www.youtube.com/watch?v=7Q17ubqLfaM)</li>
    <li>Using ThunderClient and Postman for HTTP requests in API development [resource](https://www.youtube.com/watch?v=I7EDAR2GRVo)</li>
    <li>A helpful course: [MERN Stack Front To Back: Full Stack React, Redux & Node.js](https://www.udemy.com/course/mern-stack-front-to-back/)</li>
  </ol>
  </summary>
</details> 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


