// ============================
//           Level-1_4
// ============================
console.log('%c Level-1_4 ', 'background: black; color: yellow;');

type Pet = {
    tiertyp: string;
    namen: string[];
};

let unsereHaustiere: Pet[] = [
    {
    tiertyp: 'Katze',
    namen: ['Gipsy', 'Nala', 'Dinky']
},
    {
    tiertyp: 'Hunde',
    namen: ['Knöpfchen', 'Pinselchen', 'Droopy']
}
];

console.log(unsereHaustiere[0].namen[1]);
console.log(unsereHaustiere[1].namen[2]);
console.log(unsereHaustiere[0].namen);
console.log(unsereHaustiere[1].namen);
unsereHaustiere[1].namen[2] = 'Snoopy';
unsereHaustiere[0].namen[1] = 'Pinky'

const hamster: Pet =
    {
        tiertyp: 'Hamster',
        namen: ['Balu', 'Snoopy']
    }

unsereHaustiere.push(hamster);
console.log(unsereHaustiere[2].namen);

// ============================
//           Level-1_5
// ============================
console.log('%c Level-1_5 ', 'background: black; color: yellow;');

type Lager = {
    schreibtisch: {
        schublade: string;
    };
    schrank: {
        "Obere Schublade": {
            Ordner1: string;
            Ordner2: string;
        };
        "Untere Schublade": string;
    };
};

let unserLager: Lager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schreibtisch['schublade']);
console.log(unserLager.schrank['Untere Schublade']);

// ============================
//           Level-1_6
// ============================
console.log('%c Level-1_6 ', 'background: black; color: yellow;');

type Musik = {
    kunstler: string;
    title: string;
    release_jahr: number;
    formate: string[];
    gold: boolean;
};

let meineTopVier: Musik[] = [
    {
    kunstler: 'The Beatles',
    title: 'Abbey Road',
    release_jahr: 1969,
    formate: ['LP', 'CD', 'MC', 'Download'],
    gold: true
    },
    {
    kunstler: 'Pink Floyd',
    title: 'Dark Side of the Moon',
    release_jahr: 1978,
    formate: ['CS', 'CD', 'LP', 'Download'],
    gold: true
    },
    {
    kunstler: 'Led Zeppelin',
    title: 'Led Zeppelin IV',
    release_jahr: 1971,
    formate: ['CS', 'LP', 'Download'],
    gold: true
    },
    {
    kunstler: 'Metallica',
    title: 'Kill ’Em All und Ride the Lightning',
    release_jahr: 1983,
    formate: ['LP', 'CD', 'MC', 'Download'],
    gold: true
    }
];

console.log(meineTopVier[0].kunstler);
console.log(meineTopVier[1].formate[3]);
console.log(meineTopVier[1].gold);
console.log(meineTopVier[2].release_jahr);
console.log(meineTopVier[3].release_jahr);
console.log(meineTopVier[3].formate[2]);
console.log(meineTopVier[3].title.substring(17, 21));
// const rideText = meineTopVier[3].title;
//   console.log(rideText.slice(rideText.indexOf("R"), rideText.indexOf(" the")));


const tnt = {
    kunstler: 'AC/DC',
    title: 'T.N.T',
    release_jahr: 1975,
    formate: ['LP', 'CD'],
    gold: true
};

// * Jetzt ist es eine Top 5 hahaha
meineTopVier.push(tnt);
console.log(meineTopVier);

// ============================
//           Level-1_7
// ============================
console.log('%c Level-1_7 ', 'background: black; color: yellow;');
console.log('Level-1_7 in HTML');

type Music = {
    artist: string;
    title: string;
    release_year: number;
    medium: string[];
    gold: boolean;
};

let myTopFour: Music[] = [
    {
        artist: 'The Beatles',
        title: 'Abbey Road',
        release_year: 1969,
        medium: ['LP', 'CD', 'MC', 'Download'],
        gold: true
    },
    {
        artist: 'Pink Floyd',
        title: 'Dark Side of the Moon',
        release_year: 1978,
        medium: ['CS', 'CD', 'LP', 'Download'],
        gold: true
    },
    {
        artist: 'Led Zeppelin',
        title: 'Led Zeppelin IV',
        release_year: 1971,
        medium: ['CS', 'LP', 'Download'],
        gold: true
    },
    {
        artist: 'Metallica',
        title: 'Kill ’Em All und Ride the Lightning',
        release_year: 1983,
        medium: ['LP', 'CD', 'MC', 'Download'],
        gold: true
    }
];

const showResults = document.querySelector('#showResults') as HTMLElement;

myTopFour.forEach((elt) => {
    showResults.innerHTML += `
        <div>
            <p>${elt.artist}</p>
            <p>${elt.title}</p>
            <p>${elt.release_year < 1975 ? elt.release_year: ''}</p>
            <p>${elt.medium}</p>
            <br>
        </div>
    `;

})

// ============================
//           Level-1_8
// ============================
console.log('%c Level-1_8 ', 'background: black; color: yellow;');

type Address = {
    street: string;
    city: string;
    postalCode: string;
};

type Student = {
    name: string;
    age: number;
    coop: boolean;
    address: Address;
    emails: string[];
};

let studentData: Student[] = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

// const showInConsole = (students: Student[]) => {
//     console.log(students[0]);
//     console.log(students[1]);
//     students.forEach((student: Student) => {
//         console.log(student.name);
//         console.log(student.coop);
//         console.log(student.address['city']);
//         console.log(student.emails);
//     });
// };

// showInConsole(studentData);

const showInConsole2 = (students: Student[]) => {
    students.forEach((elt) => {
        console.log(elt);
        console.log(elt.name);
        console.log(elt.coop);
        console.log(elt.emails);
        
    })
    const cities: string[] = students.map((elt) => elt.address.city);
    console.log(cities);
};

showInConsole2(studentData);

// ============================
//           Level-2_1
// ============================
console.log('%c Level-2_1 ', 'background: black; color: yellow;');
console.log('auch in HTML');


type EdelmetallPreis = {
    name: string;
    preiseGramEuro: number;
    veraenderung: string;
};

let edelMetallPreise: EdelmetallPreis[] = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];
// * Name forEach
const metalName: string[] = [];
edelMetallPreise.forEach((elt) => metalName.push(elt.name));
console.log(metalName);

// * Name map
const metalNameMap: string[] = edelMetallPreise.map((elt) => elt.name);
console.log(metalNameMap);

// * Preise forEach
const metalPreis: number[] = [];
edelMetallPreise.forEach((elt) => metalPreis.push(elt.preiseGramEuro));
console.log(metalPreis);

// * Preise map
const metalPreisMap: number[] = edelMetallPreise.map((elt) => elt.preiseGramEuro);
console.log(metalPreisMap);

// * veränderung forEach
const veraenderung: string[] = [];
edelMetallPreise.forEach((elt) => veraenderung.push(elt.veraenderung));
console.log(veraenderung);

// * veränderung map
const veraenderungMap: string[] = edelMetallPreise.map((elt) => elt.veraenderung);
console.log(veraenderungMap);

// * Preise filter
const preiseTeuer50: EdelmetallPreis[] = edelMetallPreise.filter((elt) => elt.preiseGramEuro > 50);
console.log(preiseTeuer50);

const resultsLevel2_1 = document.querySelector('#resultsLevel2_1') as HTMLElement;
const namen = document.querySelector('#namen') as HTMLElement;
const preise = document.querySelector('#preise') as HTMLElement;
const veraenderungen = document.querySelector('#veraenderungen') as HTMLElement;

const addResults = () => {
    metalName.forEach((elt) => {
        namen.innerHTML += `<p>${elt}</p>`;
    });
    metalPreis.forEach((elt) => {
        preise.innerHTML += `<p>${elt}</p>`;
    });
    veraenderung.forEach((elt) => {
        veraenderungen.innerHTML += `<p>${elt}</p>`;
    });
};
addResults();

// ============================
//           Level-2_2
// ============================
console.log('%c Level-2_2 ', 'background: black; color: yellow;');

type PeriodActive = {
    start: number;
    end: number | string;
    extra?: number;
};

type Singer = {
    name: string;
    country: string;
    period_active: PeriodActive;
    genre: string;
};

const singers: Singer[] = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

const sortSingers = (a: Singer, b: Singer) => {
    return a.name.localeCompare(b.name);
} 
console.log(singers.toSorted(sortSingers));

const sortSingersStart = singers.toSorted((a: Singer, b: Singer) => a.period_active.start - b.period_active.start);
console.log(sortSingersStart);

// ============================
//           Level-2_3
// ============================
console.log('%c Level-2_3 ', 'background: black; color: yellow;');
console.log('Level-2_3 in HTML');

const bandName = document.querySelector('#bandName') as HTMLElement;
const bandCountry = document.querySelector('#bandCountry') as HTMLElement;
const periodActive = document.querySelector('#periodActive') as HTMLElement;
const genre = document.querySelector('#genre') as HTMLElement;

const bandResults = (arr: Singer[]) => {
    bandName.innerHTML = '<h3>Name</h3>';
    bandCountry.innerHTML = '<h3>Country</h3>';
    periodActive.innerHTML = '<h3>Period Active</h3>';
    genre.innerHTML = '<h3>Genre</h3>';
    arr.forEach((elt) => {
        bandName.innerHTML += `<p>${elt.name}</p>`;
        bandCountry.innerHTML += `<p>${elt.country}</p>`;
        periodActive.innerHTML += `<p>${elt.period_active.start} - ${elt.period_active.end}</p>`;
        genre.innerHTML += `<p>${elt.genre}</p>`;
    });
};
bandResults(singers);

// ============================
//           Level-2_4
// ============================
console.log('%c Level-2_4 ', 'background: black; color: yellow;');

// ============================
//           Level-2_5
// ============================
console.log('%c Level-2_5 ', 'background: black; color: yellow;');

const searchBtn = document.querySelector('#searchBtn') as HTMLInputElement;

searchBtn.addEventListener('click', () => {
    const inputBandName = document.querySelector('#inputBandName') as HTMLInputElement;
    const newArr: Singer[] = [];
    singers.forEach((elt: Singer) => elt.name.includes(inputBandName.value) ? newArr.push(elt) : console.log('Band not found!'));
    bandResults(newArr);
});