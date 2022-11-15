import { useState } from "react";
import { useTranslation } from "react-i18next";
import { patchFile, postFile } from "../../../../../api/controllers/FileApi";
import { patchRecipe } from "../../../../../api/controllers/RecipeApi";
import Modal from "../../../../utils/Modal/Modal";
import RecipeLayout from "../../../layouts/RecipeLayout/RecipeLayout";

function EditRecipeModal(props){
    const { t } = useTranslation();

    const [layoutData, setLayoutData] = useState();
    const handleChangeLayoutData = (layoutData) => {
        setLayoutData(layoutData);
    }
    const [layoutFileData, setLayoutFileData] = useState();
    const handleChangeLayoutFileData = (layoutFileData) => {
        setLayoutFileData(layoutFileData);
    }
    
    const onSave = () => {
        if(layoutFileData) {
            if(props.data.file) {
                patchFile(props.data.file.id, layoutFileData);
            }
            else {
                let tempLayoutFileData = {...layoutFileData,
                    recipes: {
                        connect: {
                            id: props.data.id
                        }
                    }
                };
                postFile(tempLayoutFileData);
            }
        }
        if(layoutData!==undefined) patchRecipe(props.data.id, layoutData);
        props.onClose();
    }

    return (
        <Modal open={props.open} onClose={props.onClose} title={t('Edit Recipe')} onSave={onSave}>
            <RecipeLayout data={props.data} onChangeLayoutData={handleChangeLayoutData} onChangeLayoutFileData={handleChangeLayoutFileData}/>
        </Modal>
    )
};

export default EditRecipeModal;