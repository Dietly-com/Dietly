import { useState } from "react";
import { useTranslation } from "react-i18next";
import { postFile } from "../../../../../api/controllers/FileApi";
import { postProduct } from "../../../../../api/controllers/ProductApi";
import Modal from "../../../../utils/Modal/Modal";
import ProductLayout from "../../../layouts/ProductLayout/ProductLayout";

function CreateProductModal(props){
    const { t } = useTranslation();

    let product = {
        "name": null,
        "category": null,
        "producer": null,
        "code": null,
        "nutriScore": null,
        "vegan": false,
        "vegetarian": false,
        "description": null,
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
            postProduct(layoutData)
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
                window.location = '../../product/' + response.data.id;
            });
        }
    }

    return (
        <Modal open={props.open} onClose={props.onClose} title={t('Add Product')} onSave={onSave}>
            <ProductLayout data={product} onChangeLayoutData={handleChangeLayoutData} onChangeLayoutFileData={handleChangeLayoutFileData}/>
        </Modal>
    )
};

export default CreateProductModal;