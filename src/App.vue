<template>
    <div id="app">
        <button @click="generateKillerIpsum()">
            Generate die wollah ipsum!
        </button>
        <p>{{ killerIpsum }}</p>
    </div>
</template>

<script>
    import _ from 'lodash';

    export default {
        name: 'app',
        data () {
            return {
                killerIpsum: '',
                killerPhrases: [
                    'Kanker hoerenzonen',
                    'Kanker gezeik wollah',
                    'Ik heb geen Instagram',
                    'Ik heb geen Facebook',
                    'Ik heb geen Snapchat',
                    'Want ik ben geen bezem',
                    'Hele dagen op Internet, waar is jouw leven?',
                    'Jij bent een handicap, doet alles voor die teven',
                    'Ik heb geen Instagram',
                    'Ik heb geen Facebook',
                    'Ik heb geen Snapchat',
                    'Want ik ben geen bezem',
                    'Hele dagen op Internet, waar is jouw leven?',
                    'Jij bent een handicap, doet alles voor die teven',
                    'Ewaaaaa, Kamal heeft geen Instagram',
                    'Al die kanker shit is nep',
                    'Je volgt gewoon een Killer fan',
                    'Geen Instagram, maar Interpol',
                    'Ze zoeken naar m\'n winterhol',
                    'Deze land wordt minder vol want ik ben challas binnenkort',
                    'Thallaaaaa',
                    'Saaf is alles wat ik wil in deze leven, net een Lihoudi',
                    'Kan het niet begrijpen dat je alles doet voor sletten en pussy',
                    'Je eet alleen maar kutje, broeder, faka met jou, let op je voeding',
                    'En thuis zit je met een lege maag te kijken naar "24 Cooking"',
                    'Dat is toch treurig, ik zeg het nog keurig',
                    'Ik hoor je weer zeuren, dat opent geen deuren',
                    'Je hebt een heleboel sjans, maar een lege koelkast',
                    'Je krijgt een beetje toeslag (nou nou), ze3ma je leeft er goed van, schooier.',
                    'Fock je Instagram, jij leeft in je scherm, dat is niks voor mij. Fock dat!',
                    'Terwijl jij instagramt ben ik in het veld en maak dikke stacks saaf!',
                    'Ik ben Killer Kamal en ze willen hebben dat ik meer ga rappen',
                    'Je moet dit beseffen, ik word miljonair terwijl jij bitches beft',
                    'Wahed pissebed',
                    'Ik heb gehoord jouw moeder houdt van tinderen',
                    'Ze wil niet minderen, das fucked up voor haar kinderen. Kanker zielig wollah',
                    'Haar tabon altijd open net een tankstation',
                    'Gratis tanken, wat een vieze kahbatron',
                    'Je moeder op m\'n pik, dat is nostalgie',
                    'Elke avond liet ze mij haar kontgat zien',
                    'Ik stuur je wel de tape als je wordt 18',
                    'Dat waren mooie tijden, ja toch sahbi',
                    'Kameraad, waarom doe je als een vieze Jood?',
                    'Ik pak je aan en dan moet je naar de fysio',
                    'Ik zei het al: van je moeder maak ik video\s',
                    'Opgeladen ballen, ik heb moeilijk hoge libido',
                    'Ewa effe tranqir, ik was allang hier',
                    'Ik ben op papier, wahed bankier',
                    'Ik ben een nachtdier , das de enige manier',
                    'Overdag duik ik onder als een vampier',
                    'Overdag duik ik onder als een vampier',
                    'Woensel is de Basis, iedereen weet wie de fock de baas is',
                    'Rij in een merrie op de linkerbaan en we blazen 3André Hazes',
                    'Voor m\'n werk heb ik nog geen vergunning',
                    'Iba3esh heeft welloe gunning',
                    'Ewa lik m\'n qlaqel en eet m\'n pudding',
                    'Ik heb geen Instagram',
                    'Ik heb geen Facebook',
                    'Ik heb geen Snapchat',
                    'Want ik ben geen bezem',
                    'Hele dagen op Internet, waar is jouw leven?',
                    'Jij bent een handicap, doet alles voor die teven',
                    'Ik heb geen Instagram',
                    'Ik heb geen Facebook',
                    'Ik heb geen Snapchat',
                    'Want ik ben geen bezem',
                    'Hele dagen op Internet, waar is jouw leven?',
                    'Jij bent een handicap, doet alles voor die teven',
                    'Ewa, als je mij wil volgen, volg je moeder...',
                    'Want daar ben ik, la3youn'
                ],
            }
        },
        methods: {
            generateKillerIpsum() {
                this.killerIpsum = _.shuffle(this.killerPhrases).join(', ').toString();
            }
        }
    }
</script>
