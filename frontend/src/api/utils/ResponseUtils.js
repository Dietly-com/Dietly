import { toast } from 'react-toastify';

export const RESULT_SOMETHING_WRONG = {
    "success": false,
    "messages": [
        {
            "text": "Coś poszło nie tak",
            "type": "error",
            "code": "E0"
        }
    ]
};

export const notify = (text, type) => {
    const options = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: type
    };
    toast(text, options);
}
 
export const processResult = (result) => {
    for (const message of result.messages) {
        notify(message.text, message.type);
    }
}