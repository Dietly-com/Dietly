import { useState } from "react";

export var useSettings = () => {
    var [name, setName] = useState("");
    var [surname, setSurname] = useState();
    var [email, setEmail] = useState();
    var [phone, setPhone] = useState();

    var [login, setLogin] = useState();
    var [password, setPassword] = useState();

    var [filePath, setFilePath] = useState();
    var [fileId, setFileId] = useState();

    var [displayTheme, setDisplayTheme] = useState();
    var [displayLanguage, setDisplayLanguage] = useState();

    var [height, setHeight] = useState();
    var [weight, setWeight] = useState();

    return [name, setName, surname, setSurname, email, setEmail, phone, setPhone,
        password, setPassword, login, setLogin,
        height, setHeight, weight, setWeight,
        filePath, setFilePath, fileId, setFileId,
        displayTheme, setDisplayTheme, displayLanguage, setDisplayLanguage]
}
