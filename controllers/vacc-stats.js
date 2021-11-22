const vaccStatsByRace = `SELECT first_dose_by_race,
    first_dose_prop_by_race,
    second_dose_by_race,
    second_dose_prop_by_race,
    race_ID,
    county_ID
FROM
    vaccine_data_by_race`;
    export default vaccStatsByRace