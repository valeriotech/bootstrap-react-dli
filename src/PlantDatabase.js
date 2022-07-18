export const PlantDatabase = {
    Cannabis: {
        dli: {
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
                co2: {}
            },
            autoFlower: {
                0: 12,
                1: 16,
                2: 20,
                3: 30,
                4: 35,
                5: 40,
                6: 45,
                7: 50,
                8: 55,
                9: 55,
                10: 45,
                11: 35,
                12: 25,
                13: 25,
                14: 25,
                co2: {},
            },

        },

    },
    stages: {
        seedling: {
            title: 'Seedling',
            img: 'https://sensiseeds.com/blog/wp-content/uploads/2020/11/best-conditions-for-seedlings-scaled.jpg',
            content: 'Seedling stage begins when the seed coat splits open and exposes the root and cotyledons. It lasts from 1 to 4 weeks, and is the period of greatest vulnerability in the life cycle of the plant, requiring moderate humidity levels, medium to high light intensity, and adequate but not excessive soil moisture.'
        },
        vegetative: {
            title: 'Vegetative',
            img: 'https://2fast4buds.com/temp/img_upload/bg_68fc4da7bc307c6b605e11c056766ff3.jpg',
            content: 'Duration: 1–2 months indoors. In this stage the plant needs a significant amount of light and nutrients, depending on the genetics of the particular plant. It continues to grow vertically and produce new leaves. The sex is starting to reveal itself, which is a sign that the next stage begins. Concurrently the root system expands downwards in search of more water and food.'
        },
        flowering: {
            title: 'Flowering',
            img: 'https://www.cannabisbusinesstimes.com/fileuploads/publications/38/issues/103722/articles/images/heliojack.jpg?w=736&h=414&mode=crop',
            content: 'Flowering phase varies from about 6 to 12 weeks for pure indicas with their shorter flowering time than pure sativas. Mixed indica/sativa strains have an intermediate flowering time. The sex is clearly revealed in the first phase, the actual flowering. Males produce little ball-like flowers clustered together like grapes called panicles.'
        },
        maturing: {
            title: 'Maturing',
            img: 'https://www.royalqueenseeds.com/modules/prestablog/themes/royalqueenseeds/up-img/98.jpg',
            content: 'Plant is dying bye.'
        },
    },
    getStage: function (weeks) {
        const {seedling, vegetative, flowering, maturing} = this.stages
        if (weeks <= 2) {
            return seedling
        } else if (weeks <= 7) {
            return vegetative
        } else if (weeks <= 12) {
            return flowering
        } else {
            return maturing
        }
    },
}