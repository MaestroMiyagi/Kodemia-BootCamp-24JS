let people = [{
        gender: "male",
        name: {
            title: "Mr",
            first: "Pimen",
            last: "Dreveckiy",
        },
        registered: {
            date: "2012-10-17T22:58:40.011Z",
            age: 10,
        },
        id: {
            name: "",
            value: null,
        },
        nat: "UA",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Batur",
            last: "Orbay",
        },
        registered: {
            date: "2004-09-29T02:10:46.486Z",
            age: 18,
        },
        id: {
            name: "",
            value: null,
        },
        nat: "TR",
    },
    {
        gender: "male",
        name: {
            title: "Monsieur",
            first: "Ueli",
            last: "Garcia",
        },
        registered: {
            date: "2020-07-12T01:48:06.418Z",
            age: 2,
        },
        id: {
            name: "AVS",
            value: "756.7819.4500.36",
        },
        nat: "CH",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Carter",
            last: "Wilson",
        },
        registered: {
            date: "2005-11-26T16:30:05.354Z",
            age: 17,
        },
        id: {
            name: "",
            value: null,
        },
        nat: "NZ",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Matilda",
            last: "Haataja",
        },
        registered: {
            date: "2011-04-15T06:10:59.096Z",
            age: 11,
        },
        id: {
            name: "HETU",
            value: "NaNNA852undefined",
        },
        nat: "FI",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Valdemar",
            last: "Madsen",
        },
        registered: {
            date: "2008-08-26T11:37:22.805Z",
            age: 14,
        },
        id: {
            name: "CPR",
            value: "270485-2919",
        },
        nat: "DK",
    },
    {
        gender: "female",
        name: {
            title: "Miss",
            first: "Kitty",
            last: "Pena",
        },
        registered: {
            date: "2005-10-03T02:57:11.031Z",
            age: 17,
        },
        id: {
            name: "TFN",
            value: "276292784",
        },
        nat: "AU",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "كيان",
            last: "حیدری",
        },
        registered: {
            date: "2007-12-25T03:31:02.070Z",
            age: 15,
        },
        id: {
            name: "",
            value: null,
        },
        nat: "IR",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Rémy",
            last: "Colin",
        },
        registered: {
            date: "2007-01-29T12:04:22.955Z",
            age: 16,
        },
        id: {
            name: "INSEE",
            value: "1771006215280 18",
        },
        nat: "FR",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Uriel",
            last: "Colón",
        },
        registered: {
            date: "2014-01-24T19:45:13.008Z",
            age: 9,
        },
        id: {
            name: "NSS",
            value: "73 34 91 4974 6",
        },
        nat: "MX",
    },
];

/* 1.-Obtener un array que contenga las diferentes nacionalidades ( sin repetir ) de estas personas
[
    "MX",
    "FR",
]*/

const nats = (people) => {
    let resultNatioanlity = people.map(item => item.nat)
    let setNationality = [...new Set(resultNatioanlity)]
    return setNationality
}

let uniqueNats = nats(people)
console.log(uniqueNats)

/* 2.-Obtener un nuevo array con la lista de nombres completos de todas las personas
  [
      "Mr. Uriel Colón",
      "Mr. Remy Colin"
  ] */

const fullNames = (arrayNames) => {
    let result = arrayNames.map(item => item.name)
    let results = result.map(item => {
        return `${item.title} ${item.first} ${item.last}`
    })
    console.log(results)
}

let resultNames = fullNames(people)
console.log(resultNames)

/* 3.-Obtener la edad promedio de nuestras personas */

const averageAge = (age) => {
    let averageAge = age.reduce((acum, current) => acum + current.registered.age / age.length, 0)
    return averageAge;
}

let averageResult = averageAge(people)
console.log(averageResult)

/* 4.-Obtener una nueva lista con las personas del género que se indique */

const filterGender = (gender, genderOption) => {
    let resultGender = gender.filter(gender => gender.gender === genderOption)
    return resultGender
}

let resultGender = filterGender(people, "female")
console.log(resultGender)

/* 5.-Obtener las personas que incluyan en su nombre el texto que se indique */

const filterName = (arrayFullNames, search) => {
    let result = arrayFullNames.map(item => item.name)
    let results = result.map(item => {
        return `${item.title} ${item.first} ${item.last}`
    })
    let searchName = results.filter(names => names === search)
    console.log(searchName)
    return searchName
}

let resultSearch = filterName(people, "Mr Pimen Dreveckiy")
console.log(resultSearch)