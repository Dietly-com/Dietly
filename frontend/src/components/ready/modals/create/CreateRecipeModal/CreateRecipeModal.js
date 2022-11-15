import { useState } from "react";
import { useTranslation } from "react-i18next";
import { postFile } from "../../../../../api/controllers/FileApi";
import { postRecipe } from "../../../../../api/controllers/RecipeApi";
import Modal from "../../../../utils/Modal/Modal";
import RecipeLayout from "../../../layouts/RecipeLayout/RecipeLayout";

function CreateRecipeModal(props){
    const { t } = useTranslation();

    let recipe = {
        "name": null,
        "category": null,
        "vegan": false,
        "vegetarian": false,
        "description": null,
        "preparation": null,
        "unitId": null,
        "quantity": null,
        "file": {
            "path": null
        }
    }

    const [layoutData, setLayoutData] = useState();
    const handleChangeLayoutData = (layoutData) => {
        setLayoutData(layoutData);
    }
    const [layoutFileData, setLayoutFileData] = useState();
    const handleChangeLayoutFileData = (layoutFileData) => {
        setLayoutFileData(layoutFileData);
    }
    
    const onSave = () => {
        if(layoutData!==undefined){
            postRecipe(layoutData)
            .then((response)=>{
                if(layoutFileData!==undefined) {
                    postFile({...layoutFileData,
                        products: {
                            connect: {
                                id: response.data.id
                            }
                        }
                    });
                }
                props.onClose();
                window.location = '../../recipe/' + response.data.id;
            });
        }
    }

    return (
        <Modal open={props.open} onClose={props.onClose} title={t('Add Recipe')} onSave={onSave}>
            <RecipeLayout data={recipe} onChangeLayoutData={handleChangeLayoutData} onChangeLayoutFileData={handleChangeLayoutFileData}/>
        </Modal>
    )
};

export default CreateRecipeModal;