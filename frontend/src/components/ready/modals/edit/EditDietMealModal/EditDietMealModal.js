import { useState } from "react";
import { useTranslation } from "react-i18next";
import { patchDietMeal } from "../../../../../api/controllers/DietMealApi";
import Modal from "../../../../utils/Modal/Modal";
import DietMealLayout from "../../../layouts/DietMealLayout/DietMealLayout";

function EditDietMealModal(props){
    const { t } = useTranslation();

    const [layoutData, setLayoutData] = useState();
    const handleChangeLayoutData = (layoutData) => {
        setLayoutData(layoutData);
    }
    
    const onSave = () => {
        let data = {};
        if(layoutData.name) data.name = layoutData.name;
        if(layoutData.day) data.day = layoutData.day;
        if(layoutData.time) {
            let time = new Date(layoutData.time)
            data.hour = time.getHours();
            data.minute = time.getMinutes();
        }
        if(layoutData!==undefined) patchDietMeal(props.data.id, data);
        props.onClose();
    }

    return (
        <Modal open={props.open} onClose={props.onClose} title={t('Edit Meal')} onSave={onSave}>
            <DietMealLayout data={{...props.data, time: props.data.hour+':'+props.data.minute}} onChangeLayoutData={handleChangeLayoutData}/>
        </Modal>
    )
};

export default EditDietMealModal;