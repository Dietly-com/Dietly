import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
        en: {
            translation: {
                "Search": "Search",
                "Recipes for you": "Recipes for you",
                "Recommended products": "Recommended products",
                "Popular diets": "Popular diets",
                "Today summary": "Today summary",
                "Summary": "Summary",
                "Breakfast": "Breakfast",
                "Snack I": "Snack I",
                "Lunch": "Lunch",
                "Snack II": "Snack II",
                "Dinner": "Dinner",
                "Snack III": "Snack III",
                "Products": "Products",
                "Popular products": "Popular products",
                "Recipes": "Recipes",
                "Your diets": "Your diets",
                "Discover diets": "Discover diets",
                "Your active diets": "Your active diets",
                "Diets": "Diets",
                "Personal Settings": "Personal Settings",
                "Login Settings": "Login Settings",
                "Delete Account": "Delete Account",
                "Display Settings": "Display Settings",
                "Avatar": "Avatar",
                "Body data": "Body data",
                "Activity level": "Activity level",
                "Badges": "Badges",
                "Personal Bests": "Personal Bests",
                "Height": "Height",
                "Weight": "Weight",
                "BMI": "BMI",
                "Health life": "Health life",
                "Sign in": "Sign in",
                "Login": "Login",
                "Password": "Password",
                "Sign up": "Sign up",
                "First name": "First name",
                "Last name": "Last name",
                "Email": "Email",
                "Phone": "Phone",
                "Personal": "Personal",
                "Body": "Body",
                "Avatar path": "Avatar path",
                "Display": "Display",
                "Theme": "Theme",
                "Language": "Language",
                "Save": "Save",
                "Edit": "Edit",
                "Delete": "Delete",
                "Active": "Active",
                "Next": "Next",
                "Previous": "Previous",
                "Submit": "Submit",
                "Light": "Light",
                "Dark": "Dark",
                "Polish": "Polish",
                "English": "English",
                'Hi': 'Hi',
                'See what we have prepared for you!': 'See what we have prepared for you!',
                'Nutrients': 'Nutrients',
                'Energy': 'Energy',
                'Fat': 'Fat',
                'Carbohydrate': 'Carbohydrate',
                'Protein': 'Protein',
                'Salt': 'Salt',
                'Today': 'Today',
                'Date': 'Date',
                'Vegan': 'Vegan',
                'Vegetarian': 'Vegetarian',
                'Ingredients': 'Ingredients',
                'Preparation': 'Preparation',
                'Nuti-score': 'Nuti-score',
                'Code': 'Code',
                'Your': 'Your',
                'Popular': 'Popular',
                'Yogurt': 'Yogurt',
                'Soup': 'Soup',
                'Add Meal': 'Add Meal',
                'Add Recipe': 'Add Recipe',
                'Add Product': 'Add Product',
                'Add Diet': 'Add Diet',
                'Edit Meal': 'Edit Meal',
                'Edit Recipe': 'Edit Recipe',
                'Edit Product': 'Edit Product',
                'Edit Diet': 'Edit Diet',
                "Basic information":"Basic information",
                "Additional information":"Additional information",
                "Name":"Name",
                "Category":"Category",
                "Unit":"Unit",
                "Quantity":"Quantity",
                "Photo path":"Photo path",
                "Description":"Description",
                "Preparation infromation":"Preparation infromation",
                "Image":"Image",
                "Cancel":"Cancel",
                "Producer":"Producer",
                "Day":"Day",
                "Time":"Time",
                "Details":"Details",
                "Add":"Add",
                "Active":"Active",
                "Disactive":"Disactive",
                "Start time":"Start time",
                "End time":"End time",
                'Target':'Target',
                'Year of birth': 'Year of birth',
                'Sex': 'Sex',
                'Target Weight':'Target Weight',
                'Male':'Male',
                'Female':'Female'
            }
        },
        pl: {
            translation: {
                "Search": "Szukaj",
                "Recipes for you": "Przepisy dla Ciebie",
                "Recommended products": "Rekomendowane produkty",
                "Popular diets": "Popularne diety",
                "Today summary": "Dzisiejsze podsumowanie",
                "Summary": "Podsumowanie",
                "Breakfast": "??niadanie",
                "Snack I": "Pierwsza przek??ska",
                "Lunch": "Obiad",
                "Snack II": "Druga przek??ska",
                "Dinner": "Kolacja",
                "Snack III": "Trzecia przek??ska",
                "Products": "Produkty",
                "Popular products": "Popularne produkty",
                "Recipes": "Przepisy",
                "Your diets": "Twoje diety",
                "Discover diets": "Odkrywaj diety",
                "Your active diets": "Twoje aktywne diety",
                "Diets": "Diety",
                "Personal Settings": "Ustawienia osobiste",
                "Login Settings": "Ustawienia logowania",
                "Delete Account": "Usu?? konto",
                "Display Settings": "Ustawienia wy??wietlania",
                "Avatar": "Zdj??cie profilowe",
                "Body data": "Dane cia??a",
                "Activity level": "Poziom aktywno??ci",
                "Badges": "Odznaki",
                "Personal Bests": "Osobiste rekordy",
                "Height": "Wzrost",
                "Weight": "Waga",
                "BMI": "BMI",
                "Health life": "Zdrowe ??ycie",
                "Sign in": "Zaloguj si??",
                "Login": "Login",
                "Password": "Has??o",
                "Sign up": "Zarejestruj si??",
                "First name": "Imi??",
                "Last name": "Nazwisko",
                "Email": "Email",
                "Phone": "Telefon",
                "Personal": "Osobiste",
                "Body": "Cia??o",
                "Avatar path": "Link do zdj??cia profilowego",
                "Display": "Wy??wietlanie",
                "Theme": "Motyw",
                "Language": "J??zyk",
                "Save": "Zapisz",
                "Edit": "Edytuj",
                "Delete": "Usu??",
                "Active": "Aktywuj",
                "Next": "Dalej",
                "Previous": "Cofnij",
                "Submit": "Zatwierd??",
                "Light": "Jasny",
                "Dark": "Ciemny",
                "Polish": "Polski",
                "English": "Angielski",
                'Hi': 'Cze????',
                'See what we have prepared for you!': 'Zobacz co przygotowali??my dla Ciebie!',
                'Nutrients': 'Warto??ci od??ywcze',
                'Energy': 'Energia',
                'Fat': 'T??uszcz',
                'Carbohydrate': 'W??glowodany',
                'Protein': 'Bia??ko',
                'Salt': 'S??l',
                'Today': 'Dzisiaj',
                'Date': 'Data',
                'Vegan': 'Wega??skie',
                'Vegetarian': 'Wegetaria??skie',
                'Ingredients': 'Sk??adniki',
                'Preparation': 'Przygotowanie',
                'Nuti-score': 'Nuti-score',
                'Code': 'Kod kreskowy',
                'Your': 'Twoje',
                'Popular': 'Popularne',
                'Yogurt': 'Jogurt',
                'Soup': 'Zupa',
                'Add Meal': 'Dodaj posi??ek',
                'Add Recipe': 'Dodaj przepis',
                'Add Product': 'Dodaj produkt',
                'Add Diet': 'Dodaj diet??',
                'Edit Meal': 'Edytuj posi??ek',
                'Edit Recipe': 'Edytuj przepis',
                'Edit Product': 'Edytuj produkt',
                'Edit Diet': 'Edytuj diet??',
                "Basic information":"Podstawowe informacje",
                "Additional information":"Dodatkowe informacje",
                "Name":"Nazwa",
                "Category":"Kategoria",
                "Unit":"Jednostka",
                "Quantity":"Ilo????",
                "Photo path":"??cie??ka do zdj??cia",
                "Description":"Opis",
                "Preparation infromation":"Spos??b przygotowania",
                "Image":"Zdj??cie",
                "Cancel":"Anuluj",
                "Producer":"Producent",
                "Day":"Dzie??",
                "Time":"Czas",
                "Details":"Szczeg????y",
                "Add":"Dodaj",
                "Active":"Aktywuj",
                "Disactive":"Dezaktywuj",
                "Start time":"Od",
                "End time":"Do",
                'Target':'Cel',
                'Year of birth': 'Rok urodzenia',
                'Sex': 'P??e??',
                'Target Weight':'Waga docelowa',
                'Male':'M????czyzna',
                'Female':'Kobieta'
            }
        },
        es: {
            translation: {
                "Search": "Buscar",
                "Recipes for you": "Recetas para ti",
                "Recommended products": "Productos recomendados",
                "Popular diets": "Dietas populares",
                "Today summary": "Resumen de hoy",
                "Summary": "Resumen",
                "Breakfast": "Desayuno",
                "Snack I": "Merienda I",
                "Lunch": "Almuerzo",
                "Snack II": "Merienda II",
                "Dinner": "Cena",
                "Snack III": "Merienda III",
                "Products": "Productos",
                "Popular products": "Productos populares",
                "Recipes": "Recetas",
                "Your diets": "Tus dietas",
                "Discover diets": "Descubre las dietas",
                "Your active diets": "Tus dietas activas",
                "Diets": "Dietas",
                "Personal Settings": "Ajustes personales",
                "Login Settings": "Ajustes de inicio de sesi??n",
                "Delete Account": "Borrar cuenta",
                "Display Settings": "Ajustes de visualizaci??n",
                "Avatar": "Avatar",
                "Body data": "Datos corporales",
                "Activity level": "Nivel de actividad",
                "Badges": "Insignias",
                "Personal Bests": "Bests personales",
                "Height": "Altura",
                "Weight": "Peso",
                "BMI": "IMC",
                "Health life": "Vida sanitaria",
                "Sign in": "Iniciar sesi??n",
                "Login": "Acceso",
                "Password": "Contrase??a",
                "Sign up": "Inscribirse",
                "First name": "Nombre",
                "Last name": "Apellido",
                "Email": "Correo electr??nico",
                "Phone": "Tel??fono",
                "Personal": "Personal",
                "Body": "Cuerpo",
                "Avatar path": "Ruta del avatar",
                "Display": "Visualizaci??n",
                "Theme": "Tema",
                "Language": "Idioma",
                "Save": "Guardar",
                "Edit": "Editar",
                "Delete": "Borrar",
                "Active": "Activo",
                "Next": "Siguiente",
                "Previous": "Anterior",
                "Submit": "Enviar",
                "Light": "Luz",
                "Dark": "Oscuro",
                "Polish": "Polaco",
                "English": "Ingl??s",
                "Hi": "Hola",
                "See what we have prepared for you!": "??Mira lo que tenemos preparado para ti!",
                "Nutrients": "Nutrientes",
                "Energy": "Energ??a",
                "Fat": "Grasa",
                "Carbohydrate": "Carbohydrate",
                "Protein": "Prote??na",
                "Salt": "Sal",
                "Today": "Hoy",
                "Date": "Fecha",
                "Vegan": "Vegano",
                "Vegetarian": "Vegetariano",
                "Ingredients": "Ingredientes",
                "Preparation": "Preparation",
                "Nuti-score": "Nuti-score",
                "Code": "C??digo",
                "Your": "Su",
                "Popular": "Popular",
                "Yogurt": "Yogur",
                "Soup": "Sopa",
                "Add Meal": "Agregar comida",
                "Add Recipe": "Agregar Receta",
                "Add Product": "Agregar producto",
                "Add Diet": "Agregar dieta",
                "Edit Meal": "Editar comida",
                "Edit Recipe": "Editar receta",
                "Edit Product": "Editar producto",
                "Edit Diet": "Editar dieta",
                "Basic information": "Informaci??n b??sica",
                "Additional information": "Informaci??n Adicional",
                "Name": "Nombre",
                "Category": "Categor??a",
                "Unit": "Unidad",
                "Quantity": "Cantidad",
                "Photo path": "Ruta de la foto",
                "Description": "Descripci??n",
                "Preparation infromation": "Preparation infromation",
                "Image": "Imagen",
                "Cancel": "Cancelar",
                "Producer": "Productor",
                "Day": "D??a",
                "Time": "Hora",
                "Details": "Detalles",
                "Add": "A??adir",
                "Disactive": "Desactivo",
                "Start time": "Hora de inicio",
                "End time": "Hora de finalizaci??n"
              }
        },
    },
    lng: localStorage.getItem("displayLanguage"),
    fallbackLng: 'en',
    debug: true,

    interpolation: {
        escapeValue: false,
    },
  });

export default i18n;