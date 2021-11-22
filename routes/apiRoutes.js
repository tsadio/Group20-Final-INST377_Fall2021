/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

// Import Controllers
import covidStatsCustom from '../controllers/covid-stats.js';
import countyInfo from '../controllers/county-info_GET.js';
import addNewCounty from '../controllers/county-info_POST.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the UMD Dining API!');
});

/// /////////////////////////////////
/// ////COVID Stats Endpoint////////
/// /////////////////////////////////
router.route('/covid-stats')
    .get(async(req, res) => {
        try {
            res.json({ message: "Touched /covid-stats with GET" });
            console.log("Touched /covid-stats with GET");
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    })
    .put((req, res) => {
        try {
            res.json({ message: "Touched /covid-stats with PUT" });
            console.log("Touched /covid-stats with PUT");
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    })
    .post((req, res) => {
        try {
            res.json({ message: "Touched /covid-stats with POST" });
            console.log("Touched /covid-stats with POST");
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    })
    .delete((req, res) => {
        try {
            res.json({ message: "Touched /covid-stats with DELETE" });
            console.log("Touched /covid-stats with DELETE");
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    });
// router.route('/covid-stats')
//   .get(async(req, res) => {
//     try {
//       const stats = await db.covidStatsCustom.findAll();
//       res.json(stats);
//     } catch (err) {
//       console.error(err);
//       res.error('Server error at GET');
//     }
//   })
//   .put((req, res) => {
//     try {
//       await db.covidStatsCustom.update(
//         {
//           confirmed_deaths: req.body.confirmed_deaths,
//           positive_cases: req.body.positive_cases,
//           county_death_prop: req.body.county_death_prop
//         },
//         {
//           where: {
//             county_ID: req.body.county_ID
//           }
//         }
//       );
//       res.send('COVID Stats Successfully Updated');
//     } catch (err) {
//       console.error(err);
//       res.error('Server error at PUT');
//     }
//   })
//   .post((req, res) => {
//     try {
//       res.json({ message: "Touched /covid-stats with POST" });
//       console.log("Touched /covid-stats with POST");
//     } catch (err) {
//       console.log(error);
//       res.json({ error: 'Something went wrong' });
//     }
//   })
//   .delete((req, res) => {
//     try {
//       res.json({ message: "Touched /covid-stats with DELETE" });
//       console.log("Touched /covid-stats with DELETE");
//     } catch (err) {
//       console.log(error);
//       res.json({ error: 'Something went wrong' });
//     }
//   });
.get(async(req, res) => {
        try {
            const databaseResponse = await db.sequelizeDB.query(covidStatsCustom, {
                type: sequelize.QueryTypes.SELECT
            });
            console.log('Touched /covid-stats with GET');
            res.json(databaseResponse);
        } catch (err) {
            console.log(err);
            res.json({ error: 'Something went wrong' });
        }
    })
    .put(async(req, res) => {
        try {
            await db.covidStatsCustom.update({
                confirmed_deaths: req.body.confirmed_deaths,
                positive_cases: req.body.positive_cases,
                county_death_prop: req.body.county_death_prop
            }, {
                where: {
                    county_ID: req.body.county_ID
                }
            })
            console.log('Successfully Updated with PUT');
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    })
    .post(async(req, res) => {
        const cStatsTable = await db.covidStatsCustom.findAll();
        const currentId = (await cStatsTable.length) + 1;
        try {
            const addCovidStats = await db.covidStatsCustom.create({
                county_ID: currentId,
                confirmed_deaths: req.body.confirmed_deaths,
                positive_cases: req.body.positive_cases,
                county_death_prop: req.body.county_death_prop
            })
            console.log('Touched /covid-stats with POST');
            res.send('Successfully added with POST')
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    })
    .delete(async(req, res) => {
        try {
            await db.covidStatsCustom.destroy({
                where: {
                    county_ID: req.params.county_ID
                }
            })
            console.log('Successfully Deleted with DELETE');
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    });

/// /////////////////////////////////
/// ////Vaccine Stats Endpoint////////
/// /////////////////////////////////
router.route('/vacc-stats') <<
    << << < HEAD
    .get(async(req, res) => {
        try {
            res.json({ message: "Touched /vacc-stats with GET" });
            console.log("Touched /vacc-stats with GET");
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    })
    .put((req, res) => {
        try {
            res.json({ message: "Touched /vacc-stats with PUT" });
            console.log("Touched /vacc-stats with PUT");
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    })
    .post((req, res) => {
        try {
            res.json({ message: "Touched /vacc-stats with POST" });
            console.log("Touched /vacc-stats with POST");
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    })
    .delete((req, res) => {
        try {
            res.json({ message: "Touched /vacc-stats with DELETE" });
            console.log("Touched /vacc-stats with DELETE");
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    }); ===
=== =
.get(async(req, res) => {
        try {
            res.json({ message: 'Touched /vacc-stats with GET' });
            console.log('Touched /vacc-stats with GET');
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    })
    .put((req, res) => {
        try {
            res.json({ message: 'Touched /vacc-stats with PUT' });
            console.log('Touched /vacc-stats with PUT');
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    })
    .post((req, res) => {
        try {
            res.json({ message: 'Touched /vacc-stats with POST' });
            console.log('Touched /vacc-stats with POST');
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    })
    .delete((req, res) => {
        try {
            res.json({ message: 'Touched /vacc-stats with DELETE' });
            console.log('Touched /vacc-stats with DELETE');
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    }); >>>
>>> > b397b6220461582df8aa26befaaeca5bc92565cf

/// /////////////////////////////////
/// ////Vaccine Sites Endpoint////////
/// /////////////////////////////////
router.route('/vacc-sites') <<
    << << < HEAD
    .get(async(req, res) => {
        try {
            res.json({ message: "Touched /vacc-sites with GET" });
            console.log("Touched /vacc-sites with GET");
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    })
    .put((req, res) => {
        try {
            res.json({ message: "Touched /vacc-sites with PUT" });
            console.log("Touched /vacc-sites with PUT");
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    })
    .post((req, res) => {
        try {
            res.json({ message: "Touched /vacc-sites with POST" });
            console.log("Touched /vacc-sites with POST");
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    })
    .delete((req, res) => {
        try {
            res.json({ message: "Touched /vacc-sites with DELETE" });
            console.log("Touched /vacc-sites with DELETE");
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    }); ===
=== =
.get(async(req, res) => {
        try {
            res.json({ message: 'Touched /vacc-sites with GET' });
            console.log('Touched /vacc-sites with GET');
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    })
    .put((req, res) => {
        try {
            res.json({ message: 'Touched /vacc-sites with PUT' });
            console.log('Touched /vacc-sites with PUT');
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    })
    .post((req, res) => {
        try {
            res.json({ message: 'Touched /vacc-sites with POST' });
            console.log('Touched /vacc-sites with POST');
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    })
    .delete((req, res) => {
        try {
            res.json({ message: 'Touched /vacc-sites with DELETE' });
            console.log('Touched /vacc-sites with DELETE');
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    }); >>>
>>> > b397b6220461582df8aa26befaaeca5bc92565cf
/// /////////////////////////////////
/// ////County Info Endpoint////////
/// /////////////////////////////////
router.route('/county-info') <<
    << << < HEAD
    .get(async(req, res) => {
        try {
            res.json({ message: "Touched /county-info with GET" });
            console.log("Touched /county-info with GET");
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    })
    //put request
    .put((req, res) => {
        try {
            res.json({ message: "Touched /county-info with PUT" });
            console.log("Touched /county-info with PUT");
        } catch (err) {
            console.log(error);
            res.json({ error: 'Something went wrong' });
        }
    })

//post request
.post((req, res) => {
            try {
                res.json({ message: "Touched /county-info with POST" });
                console.log("Touched /county-info with POST"); ===
                === =
                .get(async(req, res) => {
                        try {
                            const dbResponse = await db.sequelizeDB.query(countyInfo, {
                                type: sequelize.QueryTypes.SELECT
                            });
                            res.json(dbResponse);
                            console.log('Touched /county-info with GET'); <<
                            << << < HEAD
                            res.send(listOfCounties); ===
                            === = >>>
                            >>> > 699e88078 c4685d638b1693a7dfc594b978e1e94
                        } catch (err) {
                            console.log(error);
                            res.json({ error: 'Something went wrong' });
                        }
                    })
                    // put request
                    .put(async(req, res) => {
                        try {
                            await db.County.update({
                                population_density: req.body.population_density,
                                uninsured: req.body.uninsured,
                                poverty_rate: req.body.poverty_rate
                            }, {
                                where: {
                                    county_ID: req.body.county_ID
                                }
                            })
                            res.send({ message: "Updated county" });
                            console.log('Touched /county-info with PUT');
                        } catch (err) {
                            console.log(error);
                            res.json({ error: 'Something went wrong' });
                        }
                    })

                // post request
                .post(async(req, res) => {
                    const countyInfoTable = await db.County.findAll();
                    const currentID = await countyInfoTable.length + 1;
                    try {
                        const addCounty = await db.County.create({
                            county_ID: currentID,
                            county: req.body.county,
                            population: req.body.population,
                            population_density: req.body.population_density
                        });
                        res.json(addCounty);
                        console.log('Touched /county-info with POST'); >>>
                        >>> > b397b6220461582df8aa26befaaeca5bc92565cf
                    } catch (err) {
                        console.log(error);
                        res.json({ error: 'Something went wrong' });
                    }
                })

                <<
                << << < HEAD
                //delete request
                    .delete((req, res) => {
                            try {
                                res.json({ message: "Touched /county-info with DELETE" });
                                console.log("Touched /county-info with DELETE"); ===
                                === =
                                // delete request
                                .delete(async(req, res) => {
                                    try {
                                        await db.County.destroy({
                                            where: {
                                                county_ID: req.params.county_ID
                                            }
                                        })
                                        res.json({ message: 'Touched /county-info with DELETE' });
                                        console.log("Successfully deleted a county"); >>>
                                        >>> > b397b6220461582df8aa26befaaeca5bc92565cf
                                    } catch (err) {
                                        console.log(error);
                                        res.json({ error: 'Something went wrong' });
                                    }
                                });

                                /// /////////////////////////////////
                                /// ////Unemployment Endpoint/////////
                                /// //////////////////////////////////
                                <<
                                << << < HEAD
                                router.route('/unemployment') <<
                                    <<
                                    <<
                                    < HEAD
                                    .get(async(req, res) => {
                                        try {
                                            res.json({ message: "Touched /unemployment with GET" });
                                            console.log("Touched /unemployment with GET");
                                        } catch (err) {
                                            console.log(error);
                                            res.json({ error: 'Something went wrong' });
                                        }
                                    })
                                    .put((req, res) => {
                                        try {
                                            res.json({ message: "Touched /unemployment with PUT" });
                                            console.log("Touched /unemployment with PUT");
                                        } catch (err) {
                                            console.log(error);
                                            res.json({ error: 'Something went wrong' });
                                        }
                                    })
                                    .post((req, res) => {
                                        try {
                                            res.json({ message: "Touched /unemployment with POST" });
                                            console.log("Touched /unemployment with POST");
                                        } catch (err) {
                                            console.log(error);
                                            res.json({ error: 'Something went wrong' });
                                        }
                                    })
                                    .delete((req, res) => {
                                        try {
                                            res.json({ message: "Touched /unemployment with DELETE" });
                                            console.log("Touched /unemployment with DELETE");
                                        } catch (err) {
                                            console.log(error);
                                            res.json({ error: 'Something went wrong' });
                                        }
                                    }); <<
                                <<
                                <<
                                <
                                HEAD
                                //put request
                                    .put((req, res) => {
                                            try {
                                                res.json({ message: "Touched /county-info with PUT" });
                                                console.log("Touched /county-info with PUT"); ===
                                                === =
                                                router.route('/unemployment')
                                                    .get(async(req, res) => {
                                                        try {
                                                            res.json({ message: 'Touched /unemployment with GET' });
                                                            console.log('Touched /unemployment with GET');
                                                        } catch (err) {
                                                            console.log(error);
                                                            res.json({ error: 'Something went wrong' });
                                                        }
                                                    })
                                                    .put((req, res) => {
                                                        try {
                                                            res.json({ message: 'Touched /unemployment with PUT' });
                                                            console.log('Touched /unemployment with PUT'); >>>
                                                            >>> > b397b6220461582df8aa26befaaeca5bc92565cf
                                                        } catch (err) {
                                                            console.log(error);
                                                            res.json({ error: 'Something went wrong' });
                                                        }
                                                    })

                                                //post request
                                                .post((req, res) => {
                                                    try { <<
                                                        << << < HEAD
                                                        res.json({ message: "Touched /county-info with POST" });
                                                        console.log("Touched /county-info with POST"); ===
                                                        === =
                                                        res.json({ message: 'Touched /unemployment with POST' });
                                                        console.log('Touched /unemployment with POST'); >>>
                                                        >>> > b397b6220461582df8aa26befaaeca5bc92565cf
                                                    } catch (err) {
                                                        console.log(error);
                                                        res.json({ error: 'Something went wrong' });
                                                    }
                                                })

                                                //delete request
                                                .delete((req, res) => {
                                                    try { <<
                                                        << << < HEAD
                                                        res.json({ message: "Touched /county-info with DELETE" });
                                                        console.log("Touched /county-info with DELETE"); ===
                                                        === =
                                                        res.json({ message: 'Touched /unemployment with DELETE' });
                                                        console.log('Touched /unemployment with DELETE'); >>>
                                                        >>> > b397b6220461582df8aa26befaaeca5bc92565cf
                                                    } catch (err) {
                                                        console.log(error);
                                                        res.json({ error: 'Something went wrong' });
                                                    }
                                                });


                                                ===
                                                ===
                                                = >>>
                                                >>>
                                                >
                                                906710484e20 d04aeae38757b07745ce68c88b2d
                                                export
                                                default router; ===
                                                ===
                                                =
                                                .get(async(req, res) => {
                                                        try {
                                                            res.json({ message: "Touched /unemployment with GET" });
                                                            console.log("Touched /unemployment with GET");
                                                        } catch (err) {
                                                            console.log(error);
                                                            res.json({ error: 'Something went wrong' });
                                                        }
                                                    })
                                                    .put((req, res) => {
                                                        try {
                                                            res.json({ message: "Touched /unemployment with PUT" });
                                                            console.log("Touched /unemployment with PUT");
                                                        } catch (err) {
                                                            console.log(error);
                                                            res.json({ error: 'Something went wrong' });
                                                        }
                                                    })
                                                    .post((req, res) => {
                                                        try {
                                                            res.json({ message: "Touched /unemployment with POST" });
                                                            console.log("Touched /unemployment with POST");
                                                        } catch (err) {
                                                            console.log(error);
                                                            res.json({ error: 'Something went wrong' });
                                                        }
                                                    })
                                                    .delete((req, res) => {
                                                        try {
                                                            res.json({ message: "Touched /unemployment with DELETE" });
                                                            console.log("Touched /unemployment with DELETE");
                                                        } catch (err) {
                                                            console.log(error);
                                                            res.json({ error: 'Something went wrong' });
                                                        }
                                                    });
                                                export default router; >>>
                                                >>>
                                                >
                                                14e7335 de60d3454b334403c72d12b8abb6b58fd