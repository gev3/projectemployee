import {Platform} from "react-native";

export const isIOS = Platform.OS === "ios";

export interface IEmployee {
    id: number;
    first_name: string;
    last_name: string,
    email: string,
    gender: string,
    department: string,
    job_title: string,
    country: string,
    city: string
}

export function makeId(length: number) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}


export const employees: IEmployee[] = [
    {
        id: 1,
        first_name: "Marigold",
        last_name: "Sealey",
        email: "msealey0@techcrunch.com",
        gender: "Female",
        department: "Marketing",
        job_title: "Analog Circuit Design manager",
        country: "China",
        city: "Damaying"
    },
    {
        id: 2,
        first_name: "Lanita",
        last_name: "Yves",
        email: "lyves1@hugedomains.com",
        gender: "Female",
        department: "Support",
        job_title: "Web Designer II",
        country: "Japan",
        city: "Hirakata"
    },
    {
        id: 3,
        first_name: "Donny",
        last_name: "Mannakee",
        email: "dmannakee2@psu.edu",
        gender: "Female",
        department: "Human Resources",
        job_title: "Health Coach II",
        country: "Armenia",
        city: "Sevan"
    },
    {
        id: 4,
        first_name: "Dodi",
        last_name: "Flecknell",
        email: "dflecknell3@vkontakte.ru",
        gender: "Female",
        department: "Product Management",
        job_title: "Senior Editor",
        country: "Norway",
        city: "Drammen"
    },
    {
        id: 5,
        first_name: "Marci",
        last_name: "Clink",
        email: "mclink4@netscape.com",
        gender: "Female",
        department: "Human Resources",
        job_title: "Nuclear Power Engineer",
        country: "Russia",
        city: "Nytva"
    },
    {
        id: 6,
        first_name: "Harv",
        last_name: "Cowitz",
        email: "hcowitz5@mozilla.org",
        gender: "Male",
        department: "Services",
        job_title: "Account Coordinator",
        country: "Uganda",
        city: "Entebbe"
    },
    {
        id: 7,
        first_name: "Fonz",
        last_name: "Timmermann",
        email: "ftimmermann6@nba.com",
        gender: "Male",
        department: "Legal",
        job_title: "Geological Engineer",
        country: "Russia",
        city: "Cherkasskoye"
    },
    {
        id: 8,
        first_name: "Hastie",
        last_name: "Loughton",
        email: "hloughton7@drupal.org",
        gender: "Male",
        department: "Product Management",
        job_title: "Recruiting Manager",
        country: "China",
        city: "Jinzhuang"
    },
    {
        id: 9,
        first_name: "Deck",
        last_name: "Gooday",
        email: "dgooday8@xing.com",
        gender: "Male",
        department: "Legal",
        job_title: "Speech Pathologist",
        country: "Egypt",
        city: "Isnā"
    },
    {
        id: 10,
        first_name: "Venita",
        last_name: "Kissock",
        email: "vkissock9@discovery.com",
        gender: "Female",
        department: "Services",
        job_title: "Account Representative IV",
        country: "Portugal",
        city: "Foros de Salvaterra"
    },
    {
        id: 11,
        first_name: "Leonid",
        last_name: "Farryan",
        email: "lfarryana@meetup.com",
        gender: "Male",
        department: "Accounting",
        job_title: "Research Nurse",
        country: "Russia",
        city: "Lyalichi"
    },
    {
        id: 12,
        first_name: "Mirabella",
        last_name: "Lambart",
        email: "mlambartb@artisteer.com",
        gender: "Female",
        department: "Support",
        job_title: "Systems Administrator III",
        country: "Honduras",
        city: "Marale"
    },
    {
        id: 13,
        first_name: "Farlee",
        last_name: "Oldknowe",
        email: "foldknowec@imageshack.us",
        gender: "Male",
        department: "Sales",
        job_title: "Help Desk Technician",
        country: "Egypt",
        city: "Dishnā"
    },
    {
        id: 14,
        first_name: "Blayne",
        last_name: "Browse",
        email: "bbrowsed@infoseek.co.jp",
        gender: "Male",
        department: "Legal",
        job_title: "Senior Developer",
        country: "Nigeria",
        city: "Gusau"
    },
    {
        id: 15,
        first_name: "Jaymee",
        last_name: "Dimblebee",
        email: "jdimblebeee@arstechnica.com",
        gender: "Female",
        department: "Legal",
        job_title: "Engineer IV",
        country: "Portugal",
        city: "Ortiga"
    },
    {
        id: 16,
        first_name: "Greta",
        last_name: "Plackstone",
        email: "gplackstonef@economist.com",
        gender: "Female",
        department: "Accounting",
        job_title: "Computer Systems Analyst IV",
        country: "China",
        city: "Kanshi"
    },
    {
        id: 17,
        first_name: "Thomasin",
        last_name: "de Banke",
        email: "tdebankeg@engadget.com",
        gender: "Female",
        department: "Product Management",
        job_title: "Safety Technician I",
        country: "Finland",
        city: "Varkaus"
    },
    {
        id: 18,
        first_name: "Julian",
        last_name: "Jertz",
        email: "jjertzh@google.it",
        gender: "Male",
        department: "Support",
        job_title: "Design Engineer",
        country: "Indonesia",
        city: "Nobo"
    },
    {
        id: 19,
        first_name: "Donelle",
        last_name: "Gregol",
        email: "dgregoli@barnesandnoble.com",
        gender: "Female",
        department: "Human Resources",
        job_title: "Programmer I",
        country: "Portugal",
        city: "Pedrogão"
    },
    {
        id: 20,
        first_name: "Elie",
        last_name: "Farish",
        email: "efarishj@chron.com",
        gender: "Female",
        department: "Human Resources",
        job_title: "Compensation Analyst",
        country: "China",
        city: "Changfeng"
    }
];
