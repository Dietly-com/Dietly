import { useState } from "react";
import { postUser } from '../api/controllers/UserApi';

export var useSignOn = () => {
    var [stage, setStage] = useState(0);

    var [name, setName] = useState();
    var [surname, setSurname] = useState();
    var [email, setEmail] = useState();
    var [phone, setPhone] = useState();

    var [login, setLogin] = useState();
    var [password, setPassword] = useState();
    
    var [height, setHeight] = useState();
    var [weight, setWeight] = useState();
    var [activeLevel, setActiveLevel] = useState();

    var [filePath, setFilePath] = useState('https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745');

    var [displayTheme, setDisplayTheme] = useState();
    var [displayLanguage, setDisplayLanguage] = useState();

    var signOn = (data) => {
        postUser(data)
        .then(response => {
            window.location = '/sign-in'
        })
    }

    return [
        stage, setStage,
        name, setName, surname, setSurname, email, setEmail, phone, setPhone,
        password, setPassword, login, setLogin,
        height, setHeight, weight, setWeight, activeLevel, setActiveLevel,
        filePath, setFilePath,
        displayTheme, setDisplayTheme, displayLanguage, setDisplayLanguage,
        signOn
    ];
}
