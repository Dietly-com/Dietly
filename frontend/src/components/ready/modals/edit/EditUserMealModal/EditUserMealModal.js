import { useState } from "react";
import { useTranslation } from "react-i18next";
import { patchUserMeal } from "../../../../../api/controllers/UserMealApi";
import Modal from "../../../../utils/Modal/Modal";
import UserMealLayout from "../../../layouts/UserMealLayout/UserMealLayout";

function EditUserMealModal(props){
    const { t } = useTranslation();

    const [layoutData, setLayoutData] = useState();
    const handleChangeLayoutData = (layoutData) => {
        setLayoutData(layoutData);
    }
    
    const onSave = () => {
        let data = {};
        if(layoutData.name) data.name = layoutData.name;
        if(layoutData.date) {
            let date = new Date(layoutData.date);
            data.year = date.getFullYear();
            data.month = date.getMonth()+1;
            data.day = date.getDate();
        }
        if(layoutData.time) {
            let time = new Date(layoutData.time)
            data.hour = time.getHours();
            data.minute = time.getMinutes();
        }
        if(layoutData!==undefined) patchUserMeal(props.data.id, data);
        props.onClose();
    }

    return (
        <Modal open={props.open} onClose={props.onClose} title={t('Edit Meal')} onSave={onSave}>
            <UserMealLayout data={{...props.data, date: props.data.year+'-'+props.data.month+'-'+props.data.day,  time: props.data.hour+':'+props.data.minute+':00'}} onChangeLayoutData={handleChangeLayoutData}/>
        </Modal>
    )
};

export default EditUserMealModal;