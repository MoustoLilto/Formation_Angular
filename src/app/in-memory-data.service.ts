import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const recipes = [
            {
                id: 0,
                name: 'Yasa Poulet',
                picture: 'https://static.cuisineaz.com/610x610/i96651-poulet-yassa.jpg',
                description: 'Le poulet Yassa est un plat traditionnel de la cuisine sénégalaise. Alors pour voyager un peu, laissez-vous embarquer dans ce mélange de saveurs et d\'épices typique de la cuisine africaine. Une chose est sûre, vous allez succomber !',
                ingredients: [
                    {
                        name: 'oignons',
                        quantity: 5,
                        unit: 'oz',
                    },
                    {
                        name: 'Gros poulet',
                        quantity: 1,
                        unit: 'oz',
                    },
                    {
                        name: 'riz',
                        quantity: 500,
                        unit: 'g',
                    }
                ],
                instructions: [
                    'ÉTAPE 1 Pressez les 4 citrons pour en recueillir le jus puis épluchez et émincez deux oignons et écrasez la gousse d’ail. Découpez la volaille en morceaux. Dans un bol, réalisez la marinade du poulet Yassa : mélangez la moitié de l’huile avec le jus des 4 citrons, la gousse d’ail écrasée et les oignons émincés. Salez et poivrez légèrement.',

                    'ÉTAPE 2 Disposez les morceaux de poulet dans un plat et recouvrez-les de la marinade. Laissez-les mariner au réfrigérateur pendant 6 à 12 h (idéalement une nuit entière). Mélangez de temps en temps pour que tous les blancs de poulet soient bien imprégnés de marinade. Retirez les morceaux de poulet de la marinade puis faites-les légèrement griller sur la braise, au four ou à la poêle.',
                    
                    'ÉTAPE 3 Ensuite, épluchez et émincez les 3 oignons restants. Émincez et épépinez le piment. Dans une marmite, mettez le reste de l’huile et faites revenir le reste des oignons. Versez la marinade. Ajoutez alors le piment, les feuilles de laurier et la moutarde. Mélangez puis ajoutez les morceaux de poulet. Laissez chauffer votre poulet Yassa dans le bouillon à feu doux pendant 1 h. Servez votre poulet Yassa bien chaud et dégustez-le aussitôt, avec du riz blanc ou du riz brisé.',
                ]
            },
            {
                id: 1,
                name: 'Daiquiri',
                picture: 'https://cdn.liquor.com/wp-content/uploads/2016/07/29105024/DAIQUIRI-226x248-mosaic1.jpg',
                description: 'The classic Daiquiri is a super simple rum cocktail that’s well-balanced and refreshing. The combination of sweet, sour and spirit is refreshingly tangy and perfect for any occasion.',
                ingredients: [
                    {
                        name: 'Dark rum (Appleton Estate Reserve)',
                        quantity: 2,
                        unit: 'oz',
                    },
                    {
                        name: 'Fresh lime juice',
                        quantity: 1,
                        unit: 'oz',
                    },
                    {
                        name: 'Simple sirup',
                        quantity: 1,
                        unit: 'oz',
                    }
                ],
                instructions: [
                    'Add all the ingredients to a shaker and fill with ice.',
                    'Shake, and strain into a chilled Martini glass.',
                    'Garnish with a lime wheel.'
                ]
            },
            {
                id: 2,
                name: 'Piña Colada',
                picture: 'https://cdn.liquor.com/wp-content/uploads/2016/07/29124300/PINA-COLADA-226x248-mosaic1.jpg',
                description: 'The Piña Colada is a classic tropical cocktail with rum, pineapple and coconut milk. This classic recipe will transport you to paradise. Getting caught in the rain is not required.',
                ingredients: [
                    {
                        name: 'Light or gold rum',
                        quantity: 1.5,
                        unit: 'oz',
                    },
                    {
                        name: 'Coconut milk',
                        quantity: 2,
                        unit: 'oz',
                    },
                    {
                        name: 'Fresh pineapple juice',
                        quantity: 2,
                        unit: 'oz',
                    }
                ],
                instructions: [
                    'Add all the ingredients to a shaker and fill with ice.',
                    'Shake, and strain into a Hurricane glass filled with fresh ice.',
                    'Garnish with a cherry and a pineapple wedge.'
                ]
            },
            {
                id: 3,
                name: 'Mojito',
                picture: 'https://cdn.liquor.com/wp-content/uploads/2016/07/29124230/MOJITO-226x248-mosaic1.jpg',
                description: 'To many people, the Mojito represents the perfect rum cocktail. The origins of the drink can be traced back to Cuba and the 16th-century Cuban cocktail El Draque, named for Sir Francis Drake. ',
                ingredients: [
                    {
                        name: 'Mint leaves',
                        quantity: 6
                    },
                    {
                        name: 'Simple syrup',
                        quantity: 0.75,
                        unit: 'oz',
                    },
                    {
                        name: 'Fresh lime juice',
                        quantity: 0.75,
                        unit: 'oz',
                    },
                    {
                        name: 'White rum',
                        quantity: 1.5,
                        unit: 'oz',
                    },
                    {
                        name: 'Club soda',
                        quantity: 1.5,
                        unit: 'oz',
                    }
                ],
                instructions: [
                    'In a shaker, lightly muddle the mint.',
                    'Add the simple syrup, lime juice and rum, and fill with ice.',
                    'Shake well and pour (unstrained) into a highball glass.',
                    'Top with the club soda and garnish with a mint sprig.'
                ]
            }
        ];

        return { 'ISHISH': recipes };
    }
}