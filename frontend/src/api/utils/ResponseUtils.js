import { showNotification } from "./NotificationUtils";

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

export const processResult = (result) => {
    for (const message of result.messages) {
        showNotification(message);
    }
}