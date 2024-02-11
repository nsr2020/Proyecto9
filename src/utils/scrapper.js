const puppeteer = require("puppeteer")
const fs = require("fs")

pelisArray = [];
/* counter = 2; */

const scrapper = async ( url) =>{
   const browser = await puppeteer.launch({
    headless: false,
   }) 
   const page = await browser.newPage()
   await page.goto(url)
   await page.setViewport({width: 1080, height:1024})
   
   // controlamos el next boton y lo seleccionamos por su atributo
  
   repeat(page,browser) 
}

const repeat = async( page,browser) =>{
    const arrayDivs = await page.$$(".ipc-metadata-list-summary-item")

    for (const divPeli of arrayDivs) {
      let title;
      let img;
      let year;
      let rate;
      
      img = await divPeli.$eval("img", (el) =>el.src)
      title = await divPeli.$eval(".ipc-title__text", (el) =>el.textContent)
      year = await divPeli.$eval(".sc-be6f1408-8", (el) => el.textContent)
      rate = await divPeli.$eval(".ipc-rating-star",(el) => el.textContent)
      /* const titleParsed =  title.split("\n                    ")[1] */
      rateParsed = parseInt(rate.split()[0])

      
      
      if (isNaN(rateParsed)){
        rateParsed = 5;
      } 
     
    
      const peli = {
      img,
      title,
      year,
      rateParsed,
      }
      pelisArray.push(peli)
      console.log(pelisArray);
      console.log(`llevamos recolectados ${pelisArray.length} datos`);
      write(pelisArray)
      
    }
/* 
     try {
      await page.waitForSelector(".next")
      await page.$eval(".next", (el) => el.click())     
     
      await page.waitForNavigation()
      console.log("Hemos pasado a la siguiente página")
      counter++; 
      repeat(page, browser)

    } catch (error) {
      await browser.close()
    }  */

    browser.close()
}


const write = (pelisArray) => {
  fs.writeFile("pelis.json", JSON.stringify(pelisArray), () =>{
      console.log("Archivo escrito");

})
}

module.exports = {scrapper}

