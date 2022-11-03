import { Button } from "@mui/material";
import { deleteMe } from "../../../../api/controllers/MeApi";
import { removeToken } from "../../../../api/utils/TokenUtils";
import Section from "../../../utils/Section/Section";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

function DeleteAccountSettings() {
    return (
        <Section
            header={<div style={{display: "flex",flexDirection: "row", alignItems:"center", gap:8}}><PersonRemoveIcon/><div>Delete Account</div></div>}>
            <Button variant="text" style={{ width: 70}} onClick={()=>{deleteMe(); removeToken(); window.location = "/sign-in"}}>Delete</Button>
        </Section>
    );
}

export default DeleteAccountSettings;