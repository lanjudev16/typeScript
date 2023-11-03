//union type typescript

type FrontendDeveloper = {
    skills: string[];
    designation1: "FrontendDeveloper",
    isReal: "Yes" | "No"
}
type BackendDeveloper = {
    skills: string[],
    designation2: "BackendDeveloper",
}

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper
const newDeveloper: FullstackDeveloper = {
    designation1: "FrontendDeveloper",
    designation2: "BackendDeveloper",
    skills: ['Html', 'CSS', 'Js'],
    isReal: 'Yes'
}

console.log(newDeveloper);