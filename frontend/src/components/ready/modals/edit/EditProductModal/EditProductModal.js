import { useState } from "react";
import { useTranslation } from "react-i18next";
import { patchFile, postFile } from "../../../../../api/controllers/FileApi";
import { patchProduct } from "../../../../../api/controllers/ProductApi";
import Modal from "../../../../utils/Modal/Modal";
import ProductLayout from "../../../layouts/ProductLayout/ProductLayout";

function EditProductModal(props){
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
                    products: {
                        connect: {
                            id: props.data.id
                        }
                    }
                };
                postFile(tempLayoutFileData);
            }
        }
        if(layoutData!==undefined) patchProduct(props.data.id, layoutData);
        props.onClose();
    }

    return (
        <Modal open={props.open} onClose={props.onClose} title={t('Edit Product')} onSave={onSave}>
            <ProductLayout data={props.data} onChangeLayoutData={handleChangeLayoutData} onChangeLayoutFileData={handleChangeLayoutFileData}/>
        </Modal>
    )
};

export default EditProductModal;