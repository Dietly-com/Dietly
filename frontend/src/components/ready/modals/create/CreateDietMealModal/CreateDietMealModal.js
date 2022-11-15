import { useState } from "react";
import { useTranslation } from "react-i18next";
import { postDietMeal } from "../../../../../api/controllers/DietMealApi";
import Modal from "../../../../utils/Modal/Modal";
import DietMealLayout from "../../../layouts/DietMealLayout/DietMealLayout";

function CreateDietMealModal(props){
    const { t } = useTranslation();

    let dietMeal = {
        "name": null,
        "date": null,
        "time": null
    }

    const [layoutData, setLayoutData] = useState();
    const handleChangeLayoutData = (layoutData) => {
        setLayoutData(layoutData);
    }
    
    const onSave = () => {
        if(layoutData!==undefined){
            let time=new Date(layoutData.time);
            postDietMeal({
                name: layoutData.name,
                day: layoutData.day,
                hour: time.getHours(),
                minute: time.getMinutes(),
                dietId: props.dietId
            })
            .then((response)=>{
                props.onClose();
            });
        }
    }

    return (
        <Modal open={props.open} onClose={props.onClose} title={t('Add Meal')} onSave={onSave}>
            <DietMealLayout data={dietMeal} onChangeLayoutData={handleChangeLayoutData}/>
        </Modal>
    )
};

export default CreateDietMealModal;