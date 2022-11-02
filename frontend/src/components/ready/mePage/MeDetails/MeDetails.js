import { useEffect, useState } from "react";
import { getMe } from "../../../../api/controllers/MeApi";

function MeDetails() {
    var [name, setName] = useState();
    var [surname, setSurname] = useState();
    var [path, setPath] = useState();
    useEffect(()=>{
        getMe()
        .then(response => {
            setName(response.data.name);
            setSurname(response.data.surname);
            setPath(response.data.file.path);
        })
    })
    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: 64}}>
            <div style={{backgroundColor: '#CCCCCC', height: 250, width: 250, borderRadius: 20, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <img src={path} style={{height: 230, width: 230, borderRadius: 20}}/>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: 8}}>
                <div style={{fontSize: 24}}>{name + ' ' + surname}</div>
            </div>
        </div>
    );
}

export default MeDetails;