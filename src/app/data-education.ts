export interface Education {
    id: number;
    degree: string;
    city: string;
    country: string;
    school: string;
    date: string;
    GPA: string;
    description: string;
    imagen: string;
}



export const educations =
    [
        {
            id: 1,
            degree: "Bachelor of Systems Engineering",
            city: "Lima",
            country: "Peru",
            school: "Universidad de Lima",
            date: "April 2020 - Present",
            GPA: "17.8",
            description: "ECS cool",
            imagen: "/assets/logos-education/logo-ulima.png",

        },
        {
            id: 2,
            degree: "Exchange Semester",
            city: "Bogota",
            country: "Colombia",
            school: "Universidad Católica de Colombia",
            date: "July 2022 - December 2022",
            GPA: "17.8",
            description: "ECS cool",
            imagen: "/assets/logos-education/logo-ucatolica.png",
        },
        {
            id: 3,
            degree: "Online Exchange Semester",
            city: "Viña del Mar",
            country: "Chile",
            school: "Universidad Adolfo Ibáñez",
            date: "July 2021 - December 2021",
            GPA: "17.8",
            description: "ECS cool",
            imagen: "/assets/logos-education/logo-uai.png",
        },

        {
            id: 4,
            degree: "International Baccalaureate",
            city: "Lima",
            country: "Peru",
            school: "Colegio Sagrados Corazones Recoleta",
            date: "April 2018 - December 2019",
            GPA: "17.8",
            description: "ECS cool",
            imagen: "/assets/logos-education/logo-recoleta.png",
        },
    ]