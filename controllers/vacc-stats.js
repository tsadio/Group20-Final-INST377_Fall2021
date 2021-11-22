const vaccStatsByRace = `SELECT first_dose_by_race,
    first_dose_prop_by_race,
    second_dose_by_race
    second_dose_prop_by_race,
    race_id,
    county_id
FROM
    vacc_data_by_race`;
export default vaccStatsByRace