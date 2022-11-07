import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../../api/controllers/RecipeApi";
import SearchBar from "../../components/ready/platform/SearchBar/SearchBar";
import Column from "../../components/utils/Column/Column";
import Page from "../../components/utils/Page/Page";
import { useTranslation } from "react-i18next";
import Group from "../../components/utils/Group/Group";
import Section from "../../components/utils/Section/Section";
import Preparation from "../../components/ready/recipePage/RecipePreparation/RecipePreparation";
import RecipeIngredients from "../../components/ready/recipePage/RecipeIngredients/RecipeIngredients";
import RecipeHeader from "../../components/ready/recipePage/RecipeHeader/RecipeHeader";
import RecipeNutrients from "../../components/ready/recipePage/RecipeNutrients/RecipeNutrients";

function RecipePage() {
    const { t } = useTranslation();
    let { id } = useParams();
    const [recipe, setRecipe] = useState();

    useEffect(()=>{
        getRecipe(id)
        .then(response => {
          setRecipe(response.data);
        });
      }, []);

    return (
      <div className="RecipePage">
        <Page
          bar_header={<SearchBar/>}
          header={
            recipe!==undefined &&
              <RecipeHeader data={recipe}/>
            }>
          <Column widthPoints = {2}>
            {recipe !== undefined && recipe.recipeProducts !== undefined && recipe.recipeProducts.length!==0 &&
              <Section
                header={<div>{t('Ingredients')}</div>}>
                <RecipeIngredients data={recipe}/>
              </Section>
            }
            {recipe!==undefined && recipe.preparation!==undefined && recipe.preparation!==null &&
              <Group>
                <Section
                  header={<div>{t('Preparation')}</div>}>
                  <Preparation data={recipe}/>
                </Section>
              </Group>
            }
          </Column>
          <Column widthPoints = {1}>
            {recipe !== undefined && recipe.recipeProducts !== undefined &&
              <Group>
                <Section
                  header={<div>{t('Nutrients')}</div>}>
                  <RecipeNutrients data={recipe}/>
                </Section>
              </Group>
            }
          </Column>
        </Page>
      </div>
    );
  }
  
  export default RecipePage;