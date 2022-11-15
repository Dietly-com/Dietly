import { useState } from "react";
import { useTranslation } from "react-i18next";
import { postUserMeal } from "../../../../../api/controllers/UserMealApi";
import Modal from "../../../../utils/Modal/Modal";
import UserMealLayout from "../../../layouts/UserMealLayout/UserMealLayout";

function CreateUserMealModal(props){
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
            let date=new Date(layoutData.date);
            let time=new Date(layoutData.time);
            postUserMeal({
                name: layoutData.name,
                year: date.getFullYear(),
                month: date.getMonth()+1,
                day: date.getDate(),
                hour: time.getHours(),
                minute: time.getMinutes()
            })
            .then((response)=>{
                props.onClose();
            });
        }
    }

    return (
        <Modal open={props.open} onClose={props.onClose} title={t('Add Meal')} onSave={onSave}>
            <UserMealLayout data={dietMeal} onChangeLayoutData={handleChangeLayoutData}/>
        </Modal>
    )
};

export default CreateUserMealModal;