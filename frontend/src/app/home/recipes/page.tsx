'use client'
import { Input } from '@/components/ui/input'
import { CardGeneral } from '@/components/common/card/card-general/cardGeneral'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel"
import { CardPopular } from '@/components/common/card/card-popular/cardPopular'
import { useState, useEffect, Key} from 'react'
import {random} from "nanoid";

export default function Recipes() {
  /*const [randomRecipes, setRandomRecipes] = useState([])

  useEffect(() => {
    fetchRandomRecipes()
  }, [])

  const fetchRandomRecipes = async () => {
    try {
      const response = await fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=100', {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '2325353ed6mshd8472e195c5caadp15a8e1jsn645fe6032a9e',
          'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
      })

      if (response.ok) {
        const data = await response.json()
        setRandomRecipes(data.recipes)
      } else {
        console.error('Error al obtener recetas aleatorias:', response.status)
      }
    } catch (error) {
      console.error('Error al obtener recetas aleatorias:', error)
    }
  }
*/

  const randomRecipes: any = [
    {
      "vegetarian": true,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 0,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 4,
      "healthScore": 1,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 41.46,
      "extendedIngredients": [
        {
          "id": 2006,
          "aisle": "Spices and Seasonings",
          "image": "cardamom.jpg",
          "consistency": "SOLID",
          "name": "pod cardamom",
          "nameClean": "cardamom",
          "original": "1 pod cardamom (seeds removed and ground with almonds)",
          "originalName": "pod cardamom (seeds removed and ground with almonds)",
          "amount": 1.0,
          "unit": "",
          "meta": [
            "with almonds)",
            "seeds removed and ground "
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 9070,
          "aisle": "Produce",
          "image": "cherries.jpg",
          "consistency": "SOLID",
          "name": "cherries",
          "nameClean": "cherries",
          "original": "2 pounds fresh cherries, pitted",
          "originalName": "fresh cherries, pitted",
          "amount": 2.0,
          "unit": "pounds",
          "meta": [
            "fresh",
            "pitted"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "lb",
              "unitLong": "pounds"
            },
            "metric": {
              "amount": 907.185,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 9087,
          "aisle": "Produce",
          "image": "dates.jpg",
          "consistency": "SOLID",
          "name": "dates",
          "nameClean": "dates",
          "original": "1 handful dates",
          "originalName": "dates",
          "amount": 1.0,
          "unit": "handful",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "handful",
              "unitLong": "handful"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "handful",
              "unitLong": "handful"
            }
          }
        },
        {
          "id": 1124,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg-white.jpg",
          "consistency": "SOLID",
          "name": "egg whites",
          "nameClean": "egg whites",
          "original": "2 Egg whites",
          "originalName": "Egg whites",
          "amount": 2.0,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 93740,
          "aisle": "Health Foods",
          "image": "almond-meal-or-almond-flour.jpg",
          "consistency": "SOLID",
          "name": "ground almonds",
          "nameClean": "almond meal",
          "original": "1 cup Ground almonds",
          "originalName": "Ground almonds",
          "amount": 1.0,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 112.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 19296,
          "aisle": "Nut butters, Jams, and Honey",
          "image": "honey.png",
          "consistency": "LIQUID",
          "name": "honey",
          "nameClean": "honey",
          "original": "1 tablespoon honey",
          "originalName": "honey",
          "amount": 1.0,
          "unit": "tablespoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 10411111,
          "aisle": "Gourmet",
          "image": "rosewater.png",
          "consistency": "SOLID",
          "name": "rosewater",
          "nameClean": "rose water",
          "original": "dash rosewater",
          "originalName": "rosewater",
          "amount": 1.0,
          "unit": "dash",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "dash",
              "unitLong": "dash"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "dash",
              "unitLong": "dash"
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "salt",
          "nameClean": "table salt",
          "original": "dash salt",
          "originalName": "salt",
          "amount": 1.0,
          "unit": "dash",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "dash",
              "unitLong": "dash"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "dash",
              "unitLong": "dash"
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "LIQUID",
          "name": "water",
          "nameClean": "water",
          "original": "1/2 cup water",
          "originalName": "water",
          "amount": 0.5,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 118.294,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        }
      ],
      "id": 632199,
      "title": "Almond Torte With Cream & Cherries",
      "readyInMinutes": 45,
      "servings": 27,
      "sourceUrl": "https://www.foodista.com/recipe/5HSLBPKT/almond-torte-with-cream-cherries",
      "image": "https://img.spoonacular.com/recipes/632199-556x370.jpg",
      "imageType": "jpg",
      "summary": "The recipe Almond Torte With Cream & Cherries can be made <b>in approximately 45 minutes</b>. One serving contains <b>48 calories</b>, <b>1g of protein</b>, and <b>2g of fat</b>. For <b>41 cents per serving</b>, you get a dessert that serves 27. This recipe is liked by 4 foodies and cooks. If you have ground almonds, honey, water, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. With a spoonacular <b>score of 19%</b>, this dish is not so amazing. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/almond-torte-mascarpone-ice-cream-with-a-brown-butter-almond-crunch-524892\">Almond Torte Mascarpone Ice Cream with a Brown Butter Almond Crunch</a>, <a href=\"https://spoonacular.com/recipes/almond-pear-cream-cheese-torte-268036\">Almond-Pear Cream Cheese Torte</a>, and <a href=\"https://spoonacular.com/recipes/dark-chocolate-tart-cherries-and-almond-whipped-cream-208622\">Dark Chocolate Tart, Cherries, and Almond Whipped Cream</a>.",
      "cuisines": [],
      "dishTypes": [
        "dessert"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "paleolithic",
        "lacto ovo vegetarian",
        "primal"
      ],
      "occasions": [],
      "instructions": "<ol><li>For the torte: Whip the egg whites with the dash of salt until they form stiff peaks.</li><li>Whip in the honey and gently fold into the ground almonds and cardamom seeds.</li><li>Place mixture on well greased trays (or use baking paper). I like to divide the mixture into four on two trays.</li><li>Spread the mixture out to about a 3/4 of an inch thick and in a circle.</li><li>Bake at about 250 to 300 degrees F for around 15 minutes. Keep an eye on them and dont let them burn on the bottom.</li><li>For the cherry filling: I advise soaking the dates in boiling water for about 5 minutes and put them through a tami or puree them so any skins are removed.</li><li>Heat the cherries and water gently in a saucepan with the lid on until they are hot.</li><li>Remove the lid and add the dates and reduce the juices down.</li><li>Turn the heat off and cool slightly before adding the rose water.</li><li>To put the torte together: Whip fresh cream and add honey.</li><li>On one layer of torte add the cherries and then the cream.</li><li>Put another layer of torte and repeat.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "For the torte: Whip the egg whites with the dash of salt until they form stiff peaks.Whip in the honey and gently fold into the ground almonds and cardamom seeds.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "cardamom seeds",
                  "localizedName": "cardamom seeds",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cardamom.jpg"
                },
                {
                  "id": 93740,
                  "name": "almond meal",
                  "localizedName": "almond meal",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/almond-meal-or-almond-flour.jpg"
                },
                {
                  "id": 1124,
                  "name": "egg whites",
                  "localizedName": "egg whites",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/egg-white.jpg"
                },
                {
                  "id": 19296,
                  "name": "honey",
                  "localizedName": "honey",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/honey.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 2,
              "step": "Place mixture on well greased trays (or use baking paper). I like to divide the mixture into four on two trays.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404770,
                  "name": "baking paper",
                  "localizedName": "baking paper",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-paper.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Spread the mixture out to about a 3/4 of an inch thick and in a circle.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Bake at about 250 to 300 degrees F for around 15 minutes. Keep an eye on them and dont let them burn on the bottom.For the cherry filling: I advise soaking the dates in boiling water for about 5 minutes and put them through a tami or puree them so any skins are removed.",
              "ingredients": [
                {
                  "id": 9070,
                  "name": "cherries",
                  "localizedName": "cherries",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cherries.jpg"
                },
                {
                  "id": 9087,
                  "name": "dates",
                  "localizedName": "dates",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/dates.jpg"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/water.png"
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 300.0,
                    "unit": "Fahrenheit"
                  }
                }
              ],
              "length": {
                "number": 20,
                "unit": "minutes"
              }
            },
            {
              "number": 5,
              "step": "Heat the cherries and water gently in a saucepan with the lid on until they are hot.",
              "ingredients": [
                {
                  "id": 9070,
                  "name": "cherries",
                  "localizedName": "cherries",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cherries.jpg"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/water.png"
                }
              ],
              "equipment": [
                {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg"
                }
              ]
            },
            {
              "number": 6,
              "step": "Remove the lid and add the dates and reduce the juices down.Turn the heat off and cool slightly before adding the rose water.To put the torte together: Whip fresh cream and add honey.On one layer of torte add the cherries and then the cream.Put another layer of torte and repeat.",
              "ingredients": [
                {
                  "id": 10411111,
                  "name": "rose water",
                  "localizedName": "rose water",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/rosewater.png"
                },
                {
                  "id": 9070,
                  "name": "cherries",
                  "localizedName": "cherries",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cherries.jpg"
                },
                {
                  "id": 1053,
                  "name": "cream",
                  "localizedName": "cream",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/fluid-cream.jpg"
                },
                {
                  "id": 9087,
                  "name": "dates",
                  "localizedName": "dates",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/dates.jpg"
                },
                {
                  "id": 19296,
                  "name": "honey",
                  "localizedName": "honey",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/honey.png"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 29.543798446655273,
      "spoonacularSourceUrl": "https://spoonacular.com/almond-torte-with-cream-cherries-632199"
    },
    {
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 22,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 3,
      "healthScore": 1,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 38.9,
      "extendedIngredients": [
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "all purpose flour",
          "nameClean": "wheat flour",
          "original": "2 cups (280g) all purpose flour",
          "originalName": "cups all purpose flour",
          "amount": 280.0,
          "unit": "g",
          "meta": [],
          "measures": {
            "us": {
              "amount": 9.877,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 280.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 18372,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "baking soda",
          "nameClean": "baking soda",
          "original": "2 teaspoons baking soda",
          "originalName": "baking soda",
          "amount": 2.0,
          "unit": "teaspoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1001,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "butter",
          "nameClean": "butter",
          "original": "1 tablespoon butter",
          "originalName": "butter",
          "amount": 1.0,
          "unit": "tablespoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 1230,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "buttermilk.jpg",
          "consistency": "SOLID",
          "name": "buttermilk",
          "nameClean": "buttermilk",
          "original": "1/2 cup (125ml) buttermilk",
          "originalName": "1/2 cup buttermilk",
          "amount": 125.0,
          "unit": "ml",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4.288,
              "unitShort": "fl. oz",
              "unitLong": "fl. ozs"
            },
            "metric": {
              "amount": 125.0,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 19165,
          "aisle": "Baking",
          "image": "cocoa-powder.png",
          "consistency": "SOLID",
          "name": "cocoa powder",
          "nameClean": "cacao powder",
          "original": "3 tablespoons cocoa powder",
          "originalName": "cocoa powder",
          "amount": 3.0,
          "unit": "tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 3.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 3.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "eggs",
          "nameClean": "egg",
          "original": "2 large eggs, beaten",
          "originalName": "eggs, beaten",
          "amount": 2.0,
          "unit": "large",
          "meta": [
            "beaten"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "large",
              "unitLong": "larges"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "large",
              "unitLong": "larges"
            }
          }
        },
        {
          "id": 19336,
          "aisle": "Baking",
          "image": "powdered-sugar.jpg",
          "consistency": "SOLID",
          "name": "icing sugar",
          "nameClean": "powdered sugar",
          "original": "1 pound (500g) icing sugar",
          "originalName": "pound icing sugar",
          "amount": 500.0,
          "unit": "g",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.102,
              "unitShort": "lb",
              "unitLong": "pounds"
            },
            "metric": {
              "amount": 500.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1077,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "milk.png",
          "consistency": "LIQUID",
          "name": "milk",
          "nameClean": "milk",
          "original": "1 cup milk",
          "originalName": "milk",
          "amount": 1.0,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 244.0,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "salt",
          "nameClean": "table salt",
          "original": "1 teaspoon salt",
          "originalName": "salt",
          "amount": 1.0,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 19335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "SOLID",
          "name": "sugar",
          "nameClean": "sugar",
          "original": "1 1/2 cups sugar",
          "originalName": "sugar",
          "amount": 1.5,
          "unit": "cups",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 300.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2050,
          "aisle": "Baking",
          "image": "vanilla-extract.jpg",
          "consistency": "LIQUID",
          "name": "vanilla extract",
          "nameClean": "vanilla extract",
          "original": "1 teaspoon vanilla extract",
          "originalName": "vanilla extract",
          "amount": 1.0,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 4669,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "vegetable-oil.jpg",
          "consistency": "LIQUID",
          "name": "vegetable oil",
          "nameClean": "vegetable oil",
          "original": "1/2 cup (125ml) vegetable oil",
          "originalName": "1/2 cup vegetable oil",
          "amount": 125.0,
          "unit": "ml",
          "meta": [],
          "measures": {
            "us": {
              "amount": 3.895,
              "unitShort": "fl. oz",
              "unitLong": "fl. ozs"
            },
            "metric": {
              "amount": 125.0,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "LIQUID",
          "name": "water",
          "nameClean": "water",
          "original": "1 cup water",
          "originalName": "water",
          "amount": 1.0,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 236.588,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        }
      ],
      "id": 645068,
      "title": "Gooey Chocolate Buttermilk Sheet Cake",
      "readyInMinutes": 45,
      "servings": 12,
      "sourceUrl": "https://www.foodista.com/recipe/GJ66TZ5G/gooey-chocolate-buttermilk-sheet-cake",
      "image": "https://img.spoonacular.com/recipes/645068-556x370.jpg",
      "imageType": "jpg",
      "summary": "Gooey Chocolate Buttermilk Sheet Cake is a <b>lacto ovo vegetarian</b> dessert. This recipe serves 12. For <b>39 cents per serving</b>, this recipe <b>covers 6%</b> of your daily requirements of vitamins and minerals. One serving contains <b>471 calories</b>, <b>5g of protein</b>, and <b>13g of fat</b>. If you have milk, vanillan extract, eggs, and a few other ingredients on hand, you can make it. This recipe from Foodista has 3 fans. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Overall, this recipe earns a <b>rather bad spoonacular score of 18%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/magic-gooey-chocolate-meringue-texas-sheet-cake-610215\">Magic Gooey Chocolate Meringue Texas Sheet Cake</a>, <a href=\"https://spoonacular.com/recipes/chocolate-buttermilk-sheet-cake-131860\">Chocolate-Buttermilk Sheet Cake</a>, and <a href=\"https://spoonacular.com/recipes/buttermilk-chocolate-texas-sheet-cake-244969\">Buttermilk Chocolate Texas Sheet Cake</a>.",
      "cuisines": [],
      "dishTypes": [
        "dessert"
      ],
      "diets": [
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "<ol><li>Cake:</li><li>Preheat oven to 350 F (180C).</li><li>In a large saucepan, bring to a boil the water, cocoa, oil and butter or margarine.</li><li>Mix the flour, sugar, salt and soda in a large mixing bowl.  </li><li>Whisk in the hot mixture and mix well.</li><li>To this add the buttermilk, vanilla and the beaten eggs; continue mixing.</li><li>Pour the batter into a greased and floured 9\"x13\" oblong baking pan.</li><li>Bake in the preheated oven for approximately 20 minutes or until a toothpick comes out clean when inserted in the middle.</li><li>Remove from the oven and frost while still warm.</li><li>Frosting:</li><li>In a large pan set over medium heat, melt the butter and the cocoa powder and milk.</li><li>Stir in the sugar and vanilla; whisk until smooth.</li><li>Add the chopped nuts if desired; stir well and spread on the warm cake.</li><li>Let cake cool before serving.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Cake:Preheat oven to 350 F (180C).In a large saucepan, bring to a boil the water, cocoa, oil and butter or margarine.",
              "ingredients": [
                {
                  "id": 4073,
                  "name": "margarine",
                  "localizedName": "margarine",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
                },
                {
                  "id": 19165,
                  "name": "cocoa powder",
                  "localizedName": "cocoa powder",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cocoa-powder.png"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/water.png"
                },
                {
                  "id": 4582,
                  "name": "cooking oil",
                  "localizedName": "cooking oil",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/vegetable-oil.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 350.0,
                    "unit": "Fahrenheit"
                  }
                }
              ]
            },
            {
              "number": 2,
              "step": "Mix the flour, sugar, salt and soda in a large mixing bowl.",
              "ingredients": [
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/flour.png"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/sugar-in-bowl.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg"
                },
                {
                  "id": 0,
                  "name": "pop",
                  "localizedName": "soft drink",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 405907,
                  "name": "mixing bowl",
                  "localizedName": "mixing bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/mixing-bowl.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Whisk in the hot mixture and mix well.To this add the buttermilk, vanilla and the beaten eggs; continue mixing.",
              "ingredients": [
                {
                  "id": 1230,
                  "name": "buttermilk",
                  "localizedName": "buttermilk",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/buttermilk.jpg"
                },
                {
                  "id": 1052050,
                  "name": "vanilla",
                  "localizedName": "vanilla",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla.jpg"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                }
              ],
              "equipment": [
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                }
              ]
            },
            {
              "number": 4,
              "step": "Pour the batter into a greased and floured 9\"x13\" oblong baking pan.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404646,
                  "name": "baking pan",
                  "localizedName": "baking pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/roasting-pan.jpg"
                }
              ]
            },
            {
              "number": 5,
              "step": "Bake in the preheated oven for approximately 20 minutes or until a toothpick comes out clean when inserted in the middle.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404644,
                  "name": "toothpicks",
                  "localizedName": "toothpicks",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/toothpicks.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ],
              "length": {
                "number": 20,
                "unit": "minutes"
              }
            },
            {
              "number": 6,
              "step": "Remove from the oven and frost while still warm.Frosting:In a large pan set over medium heat, melt the butter and the cocoa powder and milk.Stir in the sugar and vanilla; whisk until smooth.",
              "ingredients": [
                {
                  "id": 19165,
                  "name": "cocoa powder",
                  "localizedName": "cocoa powder",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cocoa-powder.png"
                },
                {
                  "id": 19230,
                  "name": "frosting",
                  "localizedName": "frosting",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla-frosting.png"
                },
                {
                  "id": 1052050,
                  "name": "vanilla",
                  "localizedName": "vanilla",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/sugar-in-bowl.png"
                },
                {
                  "id": 1077,
                  "name": "milk",
                  "localizedName": "milk",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                }
              ],
              "equipment": [
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                },
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 7,
              "step": "Add the chopped nuts if desired; stir well and spread on the warm cake.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                },
                {
                  "id": 12135,
                  "name": "nuts",
                  "localizedName": "nuts",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/nuts-mixed.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 8,
              "step": "Let cake cool before serving.",
              "ingredients": [],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 14.973835945129395,
      "spoonacularSourceUrl": "https://spoonacular.com/gooey-chocolate-buttermilk-sheet-cake-645068"
    },
    {
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 14,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 39,
      "healthScore": 1,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 37.53,
      "extendedIngredients": [
        {
          "id": 2001,
          "aisle": "Spices and Seasonings",
          "image": "allspice-ground.jpg",
          "consistency": "SOLID",
          "name": "allspice",
          "nameClean": "allspice",
          "original": "1/4 tsp Allspice",
          "originalName": "Allspice",
          "amount": 0.25,
          "unit": "tsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 18369,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "baking powder",
          "nameClean": "baking powder",
          "original": "1 tsp Baking Powder",
          "originalName": "Baking Powder",
          "amount": 1.0,
          "unit": "tsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 19334,
          "aisle": "Baking",
          "image": "light-brown-sugar.jpg",
          "consistency": "SOLID",
          "name": "brown sugar",
          "nameClean": "golden brown sugar",
          "original": "1 cup Brown Sugar",
          "originalName": "Brown Sugar",
          "amount": 1.0,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 220.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 19334,
          "aisle": "Baking",
          "image": "dark-brown-sugar.png",
          "consistency": "SOLID",
          "name": "brown sugar",
          "nameClean": "golden brown sugar",
          "original": "1 cup Brown Sugar",
          "originalName": "Brown Sugar",
          "amount": 1.0,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 220.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1001,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "butter",
          "nameClean": "butter",
          "original": "1 stick Butter",
          "originalName": "Butter",
          "amount": 1.0,
          "unit": "stick",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "stick",
              "unitLong": "stick"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "stick",
              "unitLong": "stick"
            }
          }
        },
        {
          "id": 2010,
          "aisle": "Spices and Seasonings",
          "image": "cinnamon.jpg",
          "consistency": "SOLID",
          "name": "cinnamon",
          "nameClean": "cinnamon",
          "original": "1 tsp Cinnamon",
          "originalName": "Cinnamon",
          "amount": 1.0,
          "unit": "tsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 19165,
          "aisle": "Baking",
          "image": "cocoa-powder.png",
          "consistency": "SOLID",
          "name": "cocoa powder",
          "nameClean": "cacao powder",
          "original": "2 Tbsp Cocoa Powder (Optional)",
          "originalName": "Cocoa Powder (Optional)",
          "amount": 2.0,
          "unit": "Tbsp",
          "meta": [
            "(Optional)"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "egg",
          "nameClean": "egg",
          "original": "1 Egg",
          "originalName": "Egg",
          "amount": 1.0,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "flour",
          "nameClean": "wheat flour",
          "original": "1 1/2 cups Flour",
          "originalName": "Flour",
          "amount": 1.5,
          "unit": "cups",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 187.5,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 8120,
          "aisle": "Cereal",
          "image": "rolled-oats.jpg",
          "consistency": "SOLID",
          "name": "oats",
          "nameClean": "rolled oats",
          "original": "1/2 cup Oats",
          "originalName": "Oats",
          "amount": 0.5,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 40.541,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "salt",
          "nameClean": "table salt",
          "original": "1/8 tsp Salt",
          "originalName": "Salt",
          "amount": 0.125,
          "unit": "tsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.125,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.125,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1052050,
          "aisle": "Baking",
          "image": "vanilla.jpg",
          "consistency": "SOLID",
          "name": "vanilla",
          "nameClean": "vanilla",
          "original": "1 tsp Vanilla",
          "originalName": "Vanilla",
          "amount": 1.0,
          "unit": "tsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        }
      ],
      "id": 646905,
      "title": "Homemade Animal Crackers",
      "readyInMinutes": 45,
      "servings": 8,
      "sourceUrl": "https://www.foodista.com/recipe/BPVBYNNB/homemade-animal-crackers",
      "image": "https://img.spoonacular.com/recipes/646905-556x370.jpg",
      "imageType": "jpg",
      "summary": "Homemade Animal Crackers is a dessert that serves 8. One portion of this dish contains about <b>4g of protein</b>, <b>13g of fat</b>, and a total of <b>324 calories</b>. For <b>38 cents per serving</b>, this recipe <b>covers 7%</b> of your daily requirements of vitamins and minerals. If you have butter, salt, cinnamon, and a few other ingredients on hand, you can make it. 39 people were glad they tried this recipe. It is a good option if you're following a <b>lacto ovo vegetarian</b> diet. It is brought to you by Foodista. From preparation to the plate, this recipe takes around <b>45 minutes</b>. With a spoonacular <b>score of 29%</b>, this dish is not so super. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/homemade-animal-crackers-205719\">Homemade Animal Crackers</a>, <a href=\"https://spoonacular.com/recipes/animal-crackers-732741\">Animal Crackers</a>, and <a href=\"https://spoonacular.com/recipes/animal-crackers-142292\">Animal Crackers</a>.",
      "cuisines": [],
      "dishTypes": [
        "dessert"
      ],
      "diets": [
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "<ol><li>Cream together the butter and brown sugar.</li><li>Add in the egg and vanilla and combine well.</li><li>Mix in the cinnamon, allspice, and salt.</li><li>Finally, add in the baking powder, oats, flour, and optional cocoa powder. Cocoa powder should be subbed for flour. Simply add the powder to your measuring cup and then fill the rest of the way up with flour.</li><li>Mix it up good and form into a ball. Store in the fridge for a minimum of one hour and up to overnight.</li><li>When ready, pull dough from fridge, grab off a hunk and roll it out to 1/4\" thick.</li><li>Cut out crackers and place on a cookie sheet lined with parchment.</li><li>Bake for 5-7 minutes in an oven preheated to 350 degrees.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Cream together the butter and brown sugar.",
              "ingredients": [
                {
                  "id": 19334,
                  "name": "brown sugar",
                  "localizedName": "brown sugar",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/dark-brown-sugar.png"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
                },
                {
                  "id": 1053,
                  "name": "cream",
                  "localizedName": "cream",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/fluid-cream.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 2,
              "step": "Add in the egg and vanilla and combine well.",
              "ingredients": [
                {
                  "id": 1052050,
                  "name": "vanilla",
                  "localizedName": "vanilla",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla.jpg"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 3,
              "step": "Mix in the cinnamon, allspice, and salt.Finally, add in the baking powder, oats, flour, and optional cocoa powder. Cocoa powder should be subbed for flour. Simply add the powder to your measuring cup and then fill the rest of the way up with flour.",
              "ingredients": [
                {
                  "id": 18369,
                  "name": "baking powder",
                  "localizedName": "baking powder",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg"
                },
                {
                  "id": 19165,
                  "name": "cocoa powder",
                  "localizedName": "cocoa powder",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cocoa-powder.png"
                },
                {
                  "id": 2001,
                  "name": "allspice",
                  "localizedName": "allspice",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/allspice-ground.jpg"
                },
                {
                  "id": 2010,
                  "name": "cinnamon",
                  "localizedName": "cinnamon",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/flour.png"
                },
                {
                  "id": 8120,
                  "name": "oats",
                  "localizedName": "oats",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/rolled-oats.jpg"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404766,
                  "name": "measuring cup",
                  "localizedName": "measuring cup",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/measuring-cup.jpg"
                }
              ]
            },
            {
              "number": 4,
              "step": "Mix it up good and form into a ball. Store in the fridge for a minimum of one hour and up to overnight.When ready, pull dough from fridge, grab off a hunk and roll it out to 1/4\" thick.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "dough",
                  "localizedName": "dough",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/pizza-dough"
                },
                {
                  "id": 0,
                  "name": "roll",
                  "localizedName": "roll",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/dinner-yeast-rolls.jpg"
                }
              ],
              "equipment": [],
              "length": {
                "number": 60,
                "unit": "minutes"
              }
            },
            {
              "number": 5,
              "step": "Cut out crackers and place on a cookie sheet lined with parchment.",
              "ingredients": [
                {
                  "id": 18621,
                  "name": "crackers",
                  "localizedName": "crackers",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/crackers.jpg"
                },
                {
                  "id": 10118192,
                  "name": "cookies",
                  "localizedName": "cookies",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/shortbread-cookies.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404727,
                  "name": "baking sheet",
                  "localizedName": "baking sheet",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-sheet.jpg"
                }
              ]
            },
            {
              "number": 6,
              "step": "Bake for 5-7 minutes in an oven preheated to 350 degrees.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ],
              "length": {
                "number": 7,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 32.77492141723633,
      "spoonacularSourceUrl": "https://spoonacular.com/homemade-animal-crackers-646905"
    },
    {
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 8,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 21,
      "healthScore": 1,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 62.12,
      "extendedIngredients": [
        {
          "id": 1017,
          "aisle": "Cheese",
          "image": "cream-cheese.jpg",
          "consistency": "SOLID",
          "name": "cream cheese",
          "nameClean": "cream cheese",
          "original": "250g Cream cheese",
          "originalName": "Cream cheese",
          "amount": 250.0,
          "unit": "g",
          "meta": [],
          "measures": {
            "us": {
              "amount": 8.818,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 250.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1124,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg-white.jpg",
          "consistency": "SOLID",
          "name": "egg whites",
          "nameClean": "egg whites",
          "original": "5 Egg whites",
          "originalName": "Egg whites",
          "amount": 5.0,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 5.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 5.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1125,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg-yolk.jpg",
          "consistency": "SOLID",
          "name": "egg yolks",
          "nameClean": "egg yolk",
          "original": "5 Egg yolks",
          "originalName": "Egg yolks",
          "amount": 5.0,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 5.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 5.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 9152,
          "aisle": "Produce",
          "image": "lemon-juice.jpg",
          "consistency": "LIQUID",
          "name": "lemon juice",
          "nameClean": "lemon juice",
          "original": "3 tbsp Lemon juice",
          "originalName": "Lemon juice",
          "amount": 3.0,
          "unit": "tbsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 3.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 3.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 1077,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "milk.png",
          "consistency": "LIQUID",
          "name": "soya milk",
          "nameClean": "milk",
          "original": "120ml Soya milk (unsweetened)",
          "originalName": "Soya milk (unsweetened)",
          "amount": 120.0,
          "unit": "ml",
          "meta": [
            "unsweetened",
            "()"
          ],
          "measures": {
            "us": {
              "amount": 4.185,
              "unitShort": "fl. oz",
              "unitLong": "fl. ozs"
            },
            "metric": {
              "amount": 120.0,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "flour",
          "nameClean": "wheat flour",
          "original": "70g Plain flour (sifted)",
          "originalName": "Plain flour (sifted)",
          "amount": 70.0,
          "unit": "g",
          "meta": [
            "plain",
            "sifted",
            "()"
          ],
          "measures": {
            "us": {
              "amount": 2.469,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 70.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 16161,
          "aisle": "Produce",
          "image": "tofu.png",
          "consistency": "SOLID",
          "name": "silken tofu",
          "nameClean": "silken tofu",
          "original": "250g Silken tofu (tube form)",
          "originalName": "Silken tofu (tube form)",
          "amount": 250.0,
          "unit": "g",
          "meta": [
            "(tube form)"
          ],
          "measures": {
            "us": {
              "amount": 8.818,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 250.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 19335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "SOLID",
          "name": "caster sugar",
          "nameClean": "sugar",
          "original": "130g Caster sugar",
          "originalName": "Caster sugar",
          "amount": 130.0,
          "unit": "g",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4.586,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 130.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2050,
          "aisle": "Baking",
          "image": "vanilla-extract.jpg",
          "consistency": "LIQUID",
          "name": "vanilla extract",
          "nameClean": "vanilla extract",
          "original": "1 tsp Vanilla extract",
          "originalName": "Vanilla extract",
          "amount": 1.0,
          "unit": "tsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        }
      ],
      "id": 633851,
      "title": "Baked Tofu Cheesecake",
      "readyInMinutes": 45,
      "servings": 12,
      "sourceUrl": "https://www.foodista.com/recipe/Q53P2JNF/baked-tofu-cheesecake",
      "image": "https://img.spoonacular.com/recipes/633851-556x370.jpg",
      "imageType": "jpg",
      "summary": "Baked Tofu Cheesecake is a <b>lacto ovo vegetarian</b> recipe with 12 servings. One serving contains <b>186 calories</b>, <b>6g of protein</b>, and <b>10g of fat</b>. For <b>62 cents per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. 21 person were impressed by this recipe. If you have soya milk, caster sugar, flour, and a few other ingredients on hand, you can make it. It works best as a dessert, and is done in roughly <b>45 minutes</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 28%</b>. This score is rather bad. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/baked-tofu-cheesecake-1632285\">Baked Tofu Cheesecake</a>, <a href=\"https://spoonacular.com/recipes/baked-tofu-cheesecake-1268419\">Baked Tofu Cheesecake</a>, and <a href=\"https://spoonacular.com/recipes/baked-italian-herb-tofu-how-to-press-tofu-like-a-champ-1191723\">Baked Italian Herb Tofu + How to Press Tofu Like a Champ</a>.",
      "cuisines": [],
      "dishTypes": [
        "dessert"
      ],
      "diets": [
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "<ol><li>Preheat oven to 170C. Line a 9\" cake tin and wrap with heavy duty aluminium foil to prevent any water from sipping into the cheesecake during baking.</li><li>In a food processor, blend all (A) ingredients until smooth. Put mixture in a large bowl.</li><li>In a separate mixing bowl, beat egg white and caster sugar until semi-firm peaks form to make soft meringue.</li><li>Use a whisk to mix 1/3 soft meringue with mixture.</li><li>Gently fold in the rest with spatula.</li><li>Pour mixture into cake tin and steam bake for about 50 mins at the lower rack of the oven.</li><li>Move the cheesecake to upper rack of the oven and switch temperature to grill for about 30 seconds to one minute to get a nice golden colour on top of the cake.</li><li>Leave cheesecake to cool in room temperature, remove and best to chill before serve.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Preheat oven to 170C. Line a 9\" cake tin and wrap with heavy duty aluminium foil to prevent any water from sipping into the cheesecake during baking.In a food processor, blend all (A) ingredients until smooth. Put mixture in a large bowl.In a separate mixing bowl, beat egg white and caster sugar until semi-firm peaks form to make soft meringue.Use a whisk to mix 1/3 soft meringue with mixture.Gently fold in the rest with spatula.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "caster sugar",
                  "localizedName": "caster sugar",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/sugar-in-bowl.png"
                },
                {
                  "id": 1124,
                  "name": "egg whites",
                  "localizedName": "egg whites",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/egg-white.jpg"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/water.png"
                },
                {
                  "id": 10018364,
                  "name": "wrap",
                  "localizedName": "wrap",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/flour-tortilla.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404765,
                  "name": "aluminum foil",
                  "localizedName": "aluminum foil",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/aluminum-foil.png"
                },
                {
                  "id": 404771,
                  "name": "food processor",
                  "localizedName": "food processor",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/food-processor.png"
                },
                {
                  "id": 405907,
                  "name": "mixing bowl",
                  "localizedName": "mixing bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/mixing-bowl.jpg"
                },
                {
                  "id": 404747,
                  "name": "cake form",
                  "localizedName": "cake form",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/cake-pan.png"
                },
                {
                  "id": 404642,
                  "name": "spatula",
                  "localizedName": "spatula",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/spatula-or-turner.jpg"
                },
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 170.0,
                    "unit": "Celsius"
                  }
                }
              ]
            },
            {
              "number": 2,
              "step": "Pour mixture into cake tin and steam bake for about 50 mins at the lower rack of the oven.Move the cheesecake to upper rack of the oven and switch temperature to grill for about 30 seconds to one minute to get a nice golden colour on top of the cake.Leave cheesecake to cool in room temperature, remove and best to chill before serve.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                },
                {
                  "id": 404747,
                  "name": "cake form",
                  "localizedName": "cake form",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/cake-pan.png"
                },
                {
                  "id": 404706,
                  "name": "grill",
                  "localizedName": "grill",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/grill.jpg"
                }
              ],
              "length": {
                "number": 51,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 31.128931045532227,
      "spoonacularSourceUrl": "https://spoonacular.com/baked-tofu-cheesecake-633851"
    },
    {
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 12,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 6,
      "healthScore": 1,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 33.92,
      "extendedIngredients": [
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "all purpose flour",
          "nameClean": "wheat flour",
          "original": "1 cup of All purpose Flour",
          "originalName": "All purpose Flour",
          "amount": 1.0,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 125.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "wholewheat flour",
          "nameClean": "wheat flour",
          "original": "1/2 cup of wholewheat flour",
          "originalName": "wholewheat flour",
          "amount": 0.5,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 62.5,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 19336,
          "aisle": "Baking",
          "image": "powdered-sugar.jpg",
          "consistency": "SOLID",
          "name": "powdered sugar",
          "nameClean": "powdered sugar",
          "original": "1 cup of powdered sugar",
          "originalName": "powdered sugar",
          "amount": 1.0,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 120.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 4669,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "vegetable-oil.jpg",
          "consistency": "LIQUID",
          "name": "vegetable oil",
          "nameClean": "vegetable oil",
          "original": "6 tablespoons of vegetable oil",
          "originalName": "vegetable oil",
          "amount": 6.0,
          "unit": "tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 6.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 6.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 2053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "vinegar-(white).jpg",
          "consistency": "LIQUID",
          "name": "vinegar",
          "nameClean": "distilled white vinegar",
          "original": "1 tablespoon Vinegar",
          "originalName": "Vinegar",
          "amount": 1.0,
          "unit": "tablespoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 14214,
          "aisle": "Tea and Coffee",
          "image": "instant-coffee-or-instant-espresso.png",
          "consistency": "SOLID",
          "name": "coffee powder",
          "nameClean": "instant coffee",
          "original": "1/2 teaspoon of instant coffee powder",
          "originalName": "instant coffee powder",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [
            "instant"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1012010,
          "aisle": "Spices and Seasonings",
          "image": "cinnamon.jpg",
          "consistency": "SOLID",
          "name": "cinnamon powder",
          "nameClean": "ground cinnamon",
          "original": "1 teaspoon of Cinnamon powder",
          "originalName": "Cinnamon powder",
          "amount": 1.0,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 18372,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "baking soda",
          "nameClean": "baking soda",
          "original": "1 teaspoon of Baking soda",
          "originalName": "Baking soda",
          "amount": 1.0,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "salt",
          "nameClean": "table salt",
          "original": "1/2 teaspoon of salt",
          "originalName": "salt",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1012050,
          "aisle": "Baking",
          "image": "vanilla-extract.jpg",
          "consistency": "LIQUID",
          "name": "vanilla essence",
          "nameClean": "artificial vanilla",
          "original": "1 teaspoon of Vanilla essence",
          "originalName": "Vanilla essence",
          "amount": 1.0,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 1116,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "plain-yogurt.jpg",
          "consistency": "SOLID",
          "name": "curd",
          "nameClean": "yogurt",
          "original": "1/2 cup of Curd or Yogurt",
          "originalName": "Curd or Yogurt",
          "amount": 0.5,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 122.5,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 10014209,
          "aisle": "Tea and Coffee",
          "image": "brewed-coffee.jpg",
          "consistency": "SOLID",
          "name": "strong coffee decoction",
          "nameClean": "strong coffee",
          "original": "1/2 cup of strong coffee decoction",
          "originalName": "strong coffee decoction",
          "amount": 0.5,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 118.5,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        }
      ],
      "id": 639456,
      "title": "Cinnamon Eggless Coffee Cake",
      "readyInMinutes": 45,
      "servings": 6,
      "sourceUrl": "https://www.foodista.com/recipe/CJJNKPT5/cinnamon-eggless-coffee-cake",
      "image": "https://img.spoonacular.com/recipes/639456-556x370.jpg",
      "imageType": "jpg",
      "summary": "You can never have too many breakfast recipes, so give Cinnamon Eggless Coffee Cake a try. One serving contains <b>328 calories</b>, <b>4g of protein</b>, and <b>15g of fat</b>. This recipe serves 6 and costs 34 cents per serving. It is a <b>very reasonably priced</b> recipe for fans of Southern food. This recipe from Foodista requires vinegar, wholewheat flour, baking soda, and cinnamon powder. 6 people found this recipe to be flavorful and satisfying. It is a good option if you're following a <b>lacto ovo vegetarian</b> diet. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 20%</b>, which is not so awesome. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/eggless-dates-walnut-coffee-cake-eggless-cake-s-486685\">eggless dates walnut coffee cake | eggless cake s</a>, <a href=\"https://spoonacular.com/recipes/mug-cinnamon-coffee-cake-with-coffee-mate-extra-sweet-creamy-562548\">Mug Cinnamon Coffee Cake with Coffee-mate Extra Sweet & Creamy</a>, and <a href=\"https://spoonacular.com/recipes/eggless-apple-cinnamon-muffin-eggless-muffins-622027\">Eggless Apple Cinnamon Muffin | Eggless muffins</a>.",
      "cuisines": [
        "Southern"
      ],
      "dishTypes": [
        "dessert",
        "morning meal",
        "brunch",
        "breakfast"
      ],
      "diets": [
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "Preheat the oven for 10 minutes at 180C. Grease a rectangular tin for baking the cake and keep it aside. Take a big vessel and sift the two kinds of flour with baking powder, coffee, powder, cinnamon powder and salt for at least three times.\nTake another vessel and beat powdered sugar and oil till it is light and fluffy , for about 10 minutes.\nAdd the curd, coffee decoction, vanilla essence and vinegar in the sugar and oil mixture and stir it thoroughly. Keep 1 tsp. of sugar aside.\nGently mix in the liquid mix in the dry flour. Mix the whole batter very lightly till it resembles a uniform paste. Do not over mix, just 10-12 strokes will do.\nPour the prepared batter in the baking tin and sprinkle 1 tsp. of sugar over it. Bake it at 180C for about 25-30 minutes or till done.\nInsert a clean knife and take it out, if it comes clean the cinnamon tea cake is ready, else bake it for few more minutes.\nTake out of the oven and let it cool on a wire rack. Cut it in desired shape and serve with tea or coffee. Stays good for a week.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Preheat the oven for 10 minutes at 180C. Grease a rectangular tin for baking the cake and keep it aside. Take a big vessel and sift the two kinds of flour with baking powder, coffee, powder, cinnamon powder and salt for at least three times.",
              "ingredients": [
                {
                  "id": 1012010,
                  "name": "ground cinnamon",
                  "localizedName": "ground cinnamon",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg"
                },
                {
                  "id": 18369,
                  "name": "baking powder",
                  "localizedName": "baking powder",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg"
                },
                {
                  "id": 14209,
                  "name": "coffee",
                  "localizedName": "coffee",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/brewed-coffee.jpg"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/flour.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 180.0,
                    "unit": "Celsius"
                  }
                }
              ],
              "length": {
                "number": 10,
                "unit": "minutes"
              }
            },
            {
              "number": 2,
              "step": "Take another vessel and beat powdered sugar and oil till it is light and fluffy , for about 10 minutes.",
              "ingredients": [
                {
                  "id": 19336,
                  "name": "powdered sugar",
                  "localizedName": "powdered sugar",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/powdered-sugar.jpg"
                },
                {
                  "id": 4582,
                  "name": "cooking oil",
                  "localizedName": "cooking oil",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/vegetable-oil.jpg"
                }
              ],
              "equipment": [],
              "length": {
                "number": 10,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Add the curd, coffee decoction, vanilla essence and vinegar in the sugar and oil mixture and stir it thoroughly. Keep 1 tsp. of sugar aside.",
              "ingredients": [
                {
                  "id": 1012050,
                  "name": "artificial vanilla",
                  "localizedName": "artificial vanilla",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla-extract.jpg"
                },
                {
                  "id": 2053,
                  "name": "vinegar",
                  "localizedName": "vinegar",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/vinegar-(white).jpg"
                },
                {
                  "id": 14209,
                  "name": "coffee",
                  "localizedName": "coffee",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/brewed-coffee.jpg"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/sugar-in-bowl.png"
                },
                {
                  "id": 4582,
                  "name": "cooking oil",
                  "localizedName": "cooking oil",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/vegetable-oil.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Gently mix in the liquid mix in the dry flour.",
              "ingredients": [
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/flour.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Mix the whole batter very lightly till it resembles a uniform paste. Do not over mix, just 10-12 strokes will do.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 6,
              "step": "Pour the prepared batter in the baking tin and sprinkle 1 tsp. of sugar over it.",
              "ingredients": [
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/sugar-in-bowl.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 7,
              "step": "Bake it at 180C for about 25-30 minutes or till done.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 180.0,
                    "unit": "Celsius"
                  }
                }
              ],
              "length": {
                "number": 30,
                "unit": "minutes"
              }
            },
            {
              "number": 8,
              "step": "Insert a clean knife and take it out, if it comes clean the cinnamon tea cake is ready, else bake it for few more minutes.",
              "ingredients": [
                {
                  "id": 2010,
                  "name": "cinnamon",
                  "localizedName": "cinnamon",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg"
                },
                {
                  "id": 14355,
                  "name": "tea",
                  "localizedName": "tea",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/tea-bags.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                },
                {
                  "id": 404745,
                  "name": "knife",
                  "localizedName": "knife",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/chefs-knife.jpg"
                }
              ]
            },
            {
              "number": 9,
              "step": "Take out of the oven and let it cool on a wire rack.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 405900,
                  "name": "wire rack",
                  "localizedName": "wire rack",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/wire-rack.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 10,
              "step": "Cut it in desired shape and serve with tea or coffee. Stays good for a week.",
              "ingredients": [
                {
                  "id": 14209,
                  "name": "coffee",
                  "localizedName": "coffee",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/brewed-coffee.jpg"
                },
                {
                  "id": 14355,
                  "name": "tea",
                  "localizedName": "tea",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/tea-bags.jpg"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 29.9672908782959,
      "spoonacularSourceUrl": "https://spoonacular.com/cinnamon-eggless-coffee-cake-639456"
    },
    {
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 5,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 2,
      "healthScore": 0,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 31.18,
      "extendedIngredients": [
        {
          "id": 1001,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "butter",
          "nameClean": "butter",
          "original": "4 tablespoons Butter",
          "originalName": "Butter",
          "amount": 4.0,
          "unit": "tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 4.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "flour",
          "nameClean": "wheat flour",
          "original": "1 3/4 cups all-purpose flour",
          "originalName": "all-purpose flour",
          "amount": 1.75,
          "unit": "cups",
          "meta": [
            "all-purpose"
          ],
          "measures": {
            "us": {
              "amount": 1.75,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 218.75,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 10719335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "SOLID",
          "name": "granulated sugar",
          "nameClean": "granulated sugar",
          "original": "1/4 cup granulated sugar",
          "originalName": "granulated sugar",
          "amount": 0.25,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 50.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 19334,
          "aisle": "Baking",
          "image": "light-brown-sugar.jpg",
          "consistency": "SOLID",
          "name": "brown sugar",
          "nameClean": "golden brown sugar",
          "original": "1/4 cup light brown sugar, packed",
          "originalName": "light brown sugar, packed",
          "amount": 0.25,
          "unit": "cup",
          "meta": [
            "light",
            "packed"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 55.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 19334,
          "aisle": "Baking",
          "image": "dark-brown-sugar.png",
          "consistency": "SOLID",
          "name": "brown sugar",
          "nameClean": "golden brown sugar",
          "original": "1/4 cup light brown sugar, packed",
          "originalName": "light brown sugar, packed",
          "amount": 0.25,
          "unit": "cup",
          "meta": [
            "light",
            "packed"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 55.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 10719297,
          "aisle": "Nut butters, Jams, and Honey",
          "image": "raspberry-jam.jpg",
          "consistency": "SOLID",
          "name": "raspberry jam",
          "nameClean": "raspberry jam",
          "original": "1/2 cup seedless blackberry or raspberry jam",
          "originalName": "seedless blackberry or raspberry jam",
          "amount": 0.5,
          "unit": "cup",
          "meta": [
            "seedless"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 170.0,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 2050,
          "aisle": "Baking",
          "image": "vanilla-extract.jpg",
          "consistency": "LIQUID",
          "name": "vanilla extract",
          "nameClean": "vanilla extract",
          "original": "1 teaspoon pure vanilla extract",
          "originalName": "pure vanilla extract",
          "amount": 1.0,
          "unit": "teaspoon",
          "meta": [
            "pure"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 12155,
          "aisle": "Baking",
          "image": "walnuts.jpg",
          "consistency": "SOLID",
          "name": "walnuts",
          "nameClean": "walnuts",
          "original": "1 cup walnuts, toasted, cooled, and finely chopped",
          "originalName": "walnuts, toasted, cooled, and finely chopped",
          "amount": 1.0,
          "unit": "cup",
          "meta": [
            "cooled",
            "toasted",
            "finely chopped"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 117.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        }
      ],
      "id": 635248,
      "title": "Blackberry Walnut Cookies",
      "readyInMinutes": 45,
      "servings": 20,
      "sourceUrl": "https://www.foodista.com/recipe/PKZZ8KZT/blackberry-walnut-cookies",
      "image": "https://img.spoonacular.com/recipes/635248-556x370.jpg",
      "imageType": "jpg",
      "summary": "If you want to add more <b>lacto ovo vegetarian</b> recipes to your recipe box, Blackberry Walnut Cookies might be a recipe you should try. For <b>31 cents per serving</b>, you get a dessert that serves 20. One portion of this dish contains about <b>2g of protein</b>, <b>6g of fat</b>, and a total of <b>142 calories</b>. This recipe from Foodista requires vanillan extract, raspberry jam, granulated sugar, and brown sugar. 2 people were glad they tried this recipe. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 14%</b>. This score is not so spectacular. Similar recipes are <a href=\"https://spoonacular.com/recipes/blackberry-walnut-cookies-50669\">Blackberry Walnut Cookies</a>, <a href=\"https://spoonacular.com/recipes/blackberry-walnut-salmon-485655\">Blackberry Walnut Salmon</a>, and <a href=\"https://spoonacular.com/recipes/blackberry-walnut-muffins-50696\">Blackberry Walnut Muffins</a>.",
      "cuisines": [],
      "dishTypes": [
        "dessert"
      ],
      "diets": [
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "<ol><li>Preheat oven to 350F with rack in middle. Blend together butter, sugars, vanilla, and 3/4 tsp salt in a bowl with a fork. Stir in flour and nuts (dough will be sticky).</li><li>Form level tablespoons of dough into balls (total of 40) and arrange 2 inches apart on 2 ungreased large baking sheets. Flatten balls to 1/3 inch thick using bottom of a glass dipped in flour. Bake, 1 sheet at a time, until edges are golden, about 20 minutes. Cool cookies on sheets 5 minutes, then transfer to racks to cool completely.</li><li>Spoon 1 tsp jam onto flat sides of 20 cookies, then sandwich with remaining cookies. Dust with confectioner's sugar.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Preheat oven to 350F with rack in middle. Blend together butter, sugars, vanilla, and 3/4 tsp salt in a bowl with a fork. Stir in flour and nuts (dough will be sticky).Form level tablespoons of dough into balls (total of 4",
              "ingredients": [
                {
                  "id": 1052050,
                  "name": "vanilla",
                  "localizedName": "vanilla",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
                },
                {
                  "id": 0,
                  "name": "dough",
                  "localizedName": "dough",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/pizza-dough"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/flour.png"
                },
                {
                  "id": 12135,
                  "name": "nuts",
                  "localizedName": "nuts",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/nuts-mixed.jpg"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 350.0,
                    "unit": "Fahrenheit"
                  }
                }
              ]
            },
            {
              "number": 2,
              "step": "and arrange 2 inches apart on 2 ungreased large baking sheets. Flatten balls to 1/3 inch thick using bottom of a glass dipped in flour.",
              "ingredients": [
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/flour.png"
                }
              ],
              "equipment": [
                {
                  "id": 404727,
                  "name": "baking sheet",
                  "localizedName": "baking sheet",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-sheet.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Bake, 1 sheet at a time, until edges are golden, about 20 minutes. Cool cookies on sheets 5 minutes, then transfer to racks to cool completely.Spoon 1 tsp jam onto flat sides of 20 cookies, then sandwich with remaining cookies. Dust with confectioner's sugar.",
              "ingredients": [
                {
                  "id": 10118192,
                  "name": "cookies",
                  "localizedName": "cookies",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/shortbread-cookies.jpg"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/sugar-in-bowl.png"
                },
                {
                  "id": 19297,
                  "name": "jam",
                  "localizedName": "jam",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/strawberry-jam.png"
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ],
              "length": {
                "number": 25,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 13.019331932067871,
      "spoonacularSourceUrl": "https://spoonacular.com/blackberry-walnut-cookies-635248"
    },
  ]

  return (
    <main className='flex flex-col space-y-4 select-none sm:space-y-6 md:space-y-8'>
      <h1 className='text-2xl font-bold sm:text-3xl md:text-4xl'>Recipes</h1>
      <Input className='flex w-full ml-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'/>
      <div className='flex-1 flex-col space-y-4'>
        <div className='flex flex-col space-y-2'>
          <span className='text-md'>Popular Recipes</span>
          <Carousel className="h-full w-full sm:max-w-sm md:max-w-5xl lg:max-w-5xl xl:max-w-6xl 2xl:min-w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className='-ml-1'>
              {randomRecipes.map((recipe: any, index: Key | null | undefined) => (
                <CarouselItem
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-2"
                >
                  <CardPopular recipe={recipe}/>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className='xl:-right-5 2xl:-right-12'/>
          </Carousel>
        </div>
        <div className='flex flex-col space-y-2'>
          <span className='text-md'>All Recipes</span>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 2xl:grid-cols-8'>
            {randomRecipes.map((recipe: any, index: Key | null | undefined) => (
              <CardGeneral key={index} recipe={recipe}/>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}