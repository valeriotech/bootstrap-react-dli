import Seedling from './img/seedling.svg'
import Vegetative from './img/vegetative.svg'
import Flowering from './img/flowering.svg'
import Maturing from './img/flabbynsick.png'

export const DLI = {
    dli: {
        Cannabis: {
            photoPeriod: {
                0: 12,
                1: 16,
                2: 20,
                3: 30,
                4: 40,
                5: 45,
                6: 25,
                7: 28,
                8: 30,
                9: 34,
                10: 36,
                11: 38,
                12: 40,
                13: 36,
                14: 32,
                co2: {

                },
            },
            autoFlower: {
                0: 12,
                1: 16,
                2: 20,
                3: 30,
                4: 40,
                5: 45,
                6: 50,
                7: 55,
                8: 50,
                9: 45,
                10: 40,
                11: 30,
                12: 25,
                co2: {

                },
            }
        },
        Pepper: {
            Cayenne: {
                0: 12,
                1: 16,
                2: 20,
                3: 30,
                4: 40,
                5: 45,
                6: 25,
                7: 28,
                8: 30,
                9: 34,
                10: 36,
                11: 38,
                12: 40,
                13: 36,
                14: 32,
            },
            Habanero: {
                0: 12,
                1: 16,
                2: 20,
                3: 30,
                4: 40,
                5: 45,
                6: 25,
                7: 28,
                8: 30,
                9: 34,
                10: 36,
                11: 38,
                12: 40,
                13: 36,
                14: 32,
            },
            Bell: {
                0: 12,
                1: 16,
                2: 20,
                3: 30,
                4: 40,
                5: 45,
                6: 25,
                7: 28,
                8: 30,
                9: 34,
                10: 36,
                11: 38,
                12: 40,
                13: 36,
                14: 32,
            }
        },
        Tomato: {
            Heirloom: {
                0: 12,
                1: 16,
                2: 20,
                3: 30,
                4: 40,
                5: 45,
                6: 25,
                7: 28,
                8: 30,
                9: 34,
                10: 36,
                11: 38,
                12: 40,
                13: 36,
                14: 32,
            },
            Mariglobe: {
                0: 12,
                1: 16,
                2: 20,
                3: 30,
                4: 40,
                5: 45,
                6: 25,
                7: 28,
                8: 30,
                9: 34,
                10: 36,
                11: 38,
                12: 40,
                13: 36,
                14: 32,
            },
        },
    },
    stages: {
        seedling: {
            title: 'Seedling',
            img: Seedling,
            content: 'Seedling stage begins when the seed coat splits open and exposes the root and cotyledons. It lasts from 1 to 4 weeks, and is the period of greatest vulnerability in the life cycle of the plant, requiring moderate humidity levels, medium to high light intensity, and adequate but not excessive soil moisture.'
        },
        vegetative: {
            title: 'Vegetative',
            img: Vegetative,
            content: 'Duration: 1–2 months indoors. In this stage the plant needs a significant amount of light and nutrients, depending on the genetics of the particular plant. It continues to grow vertically and produce new leaves. The sex is starting to reveal itself, which is a sign that the next stage begins. Concurrently the root system expands downwards in search of more water and food.'
        },
        flowering: {
            title: 'Flowering',
            img: Flowering,
            content: 'Flowering phase varies from about 6 to 12 weeks for pure indicas with their shorter flowering time than pure sativas. Mixed indica/sativa strains have an intermediate flowering time. The sex is clearly revealed in the first phase, the actual flowering. Males produce little ball-like flowers clustered together like grapes called panicles.'
        },
        maturing: {
            title: 'Maturing',
            img: Maturing,
            content: 'Plant is dying bye.'
        },
    },
    getStage: function(weeks) {
        const {seedling, vegetative, flowering, maturing} = this.stages
        if (weeks <= 2) {
            return seedling
        } else if (weeks <= 7){
            return vegetative
        } else if (weeks <= 12) {
            return flowering
        } else {
            return maturing
        }
    },
}