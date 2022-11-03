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

    const themes = [
        {
          value: 'light:LIGHT',
          label: 'Light',
        },
        {
          value: 'dark:DARK',
          label: 'Dark',
        }
      ];
    
      const languages = [
        {
          value: 'pl:PL',
          label: 'Polish',
        },
        {
          value: 'en:EN',
          label: 'English',
        }
      ];

      const activeLevels = [
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
        {
            value: 4,
            label: '4',
        },
        {
            value: 5,
            label: '5',
        }
      ];

      const steps = [
        'Personal',
        'Login',
        'Body',
        'Profile picture',
        'Display'
      ];

    return [
        stage, setStage,
        name, setName, surname, setSurname, email, setEmail, phone, setPhone,
        password, setPassword, login, setLogin,
        height, setHeight, weight, setWeight, activeLevel, setActiveLevel,
        filePath, setFilePath,
        displayTheme, setDisplayTheme, displayLanguage, setDisplayLanguage,
        signOn,
        themes, languages, activeLevels, steps
    ];
}
