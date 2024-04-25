import React from "react";
import styles from "./RecipePage1.module.css";
import Image from "next/image";

const RecipePage1 = () => {
  return (
    <div className={styles.bodyDiv}>
      <div className={styles.recipe}>
        <Image
          src="/images/omelette.jpeg"
          alt="Omelette"
          width={300}
          height={300}
          className={styles.imgCSS}
        />
        <div className={styles.recipeDoc}>
          <h1 className={styles.h1Class}>Simple Omelette Recipe</h1>
          <p className={styles.pCSS}>
            An easy and quick dish, perfect for any meal. This className ic
            omelette combines beaten eggs cooked to perfection, optionally
            filled with your choice of cheese, vegetables, or meats.
          </p>
          <div className={styles.prepTime}>
            <h3 className={styles.h3CSS}>Preparation time</h3>
            <ul className={styles.prepUl}>
              <li className={styles.liCSS}>
                <span className={styles.bold1}>Total: </span>Approximately 10
                minutes
              </li>
              <li className={styles.liCSS}>
                <span className={styles.bold1}>Preparation: </span>5 minutes
              </li>
              <li className={styles.liCSS}>
                <span className={styles.bold1}>Cooking: </span>5 minutes
              </li>
            </ul>
          </div>

          <h2 className={styles.h2Class}>Ingredients</h2>

          <ul className={(styles.listColor, styles.ingrUl)}>
            <li className={styles.liCSS}>
              <span className={styles.colorBlack}>2-3 large eggs</span>
            </li>
            <li className={styles.liCSS}>
              <span className={styles.colorBlack}>Salt, to taste</span>
            </li>
            <li className={styles.liCSS}>
              <span className={styles.colorBlack}>Pepper, to taste</span>
            </li>
            <li className={styles.liCSS}>
              <span className={styles.colorBlack}>
                1 tablespoon of butter or oil
              </span>
            </li>
            <li className={styles.liCSS}>
              <span className={styles.colorBlack}>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </span>
            </li>
          </ul>

          <hr className={styles.hrClass} />
          <h2 className={styles.h2Class}>Instructions</h2>

          <ol className={(styles.listColor, styles.instrOl)}>
            <li className={styles.liCSS2}>
              <p className={styles.pCSS}>
                Beat the eggs:{" "}
                <span className={styles.fontNormal}>
                  In a bowl, beat the eggs with a pinch of salt and pepper until
                  they are well mixed. You can add a tablespoon of water or milk
                  for a fluffier texture.
                </span>
              </p>
            </li>
            <li className={styles.liCSS2}>
              <p className={styles.pCSS}>
                Heat the pan:{" "}
                <span className={styles.fontNormal}>
                  Place a non-stick frying pan over medium heat and add butter
                  or oil.
                </span>
              </p>
            </li>
            <li className={styles.liCSS2}>
              <p className={styles.pCSS}>
                Cook the omelette:{" "}
                <span className={styles.fontNormal}>
                  Once the butter is melted and bubbling, pour in the eggs. Tilt
                  the pan to ensure the eggs evenly coat the surface.
                </span>
              </p>
            </li>{" "}
            <li className={styles.liCSS2}>
              <p className={styles.pCSS}>
                Add fillings (optional):{" "}
                <span className={styles.fontNormal}>
                  When the eggs begin to set at the edges but are still slightly
                  runny in the middle, sprinkle your chosen fillings over one
                  half of the omelette.
                </span>
              </p>
            </li>
            <li className={styles.liCSS2}>
              <p className={styles.pCSS}>
                Fold and serve:{" "}
                <span className={styles.fontNormal}>
                  As the omelette continues to cook, carefully lift one edge and
                  fold it over the fillings. Let it cook for another minute,
                  then slide it onto a plate.
                </span>
              </p>
            </li>
            <li className={styles.liCSS2}>
              <p className={styles.pCSS}>
                Enjoy:{" "}
                <span className={styles.fontNormal}>
                  Serve hot, with additional salt and pepper if needed.
                </span>
              </p>
            </li>
          </ol>

          <hr className={styles.hrClass} />
          <h2 className={styles.h2Class}>Nutrition</h2>
          <p className={styles.pCSS}>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className={styles.tableCSS}>
            <tbody>
              <tr className={styles.trCSS}>
                <th className={styles.thCSS}>Calories</th>
                <th>
                  <span className={styles.thSpan}>277kcal</span>
                </th>
              </tr>
              <tr className={styles.trCSS}>
                <th className={styles.thCSS}>Carbs</th>
                <th>
                  <span className={styles.thSpan}>0g</span>
                </th>
              </tr>
              <tr className={styles.trCSS}>
                <th className={styles.thCSS}>Protein</th>
                <th>
                  <span className={styles.thSpan}>20g</span>
                </th>
              </tr>
              <tr className={styles.trCSS}>
                <th className={styles.thCSS}>Fat</th>
                <th>
                  <span className={styles.thSpan}>22g</span>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.attribution}>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/brauliobolano"
          target="_blank"
          rel="noreferrer noopener"
        >
          Braulio Bolano
        </a>
        .
      </div>
    </div>
  );
};

export default RecipePage1;
