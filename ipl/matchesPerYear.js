function matchesPerYear(matches)  // Function matchesPerYear 
{
    let matchesPerYear = matches.reduce((accumulator, year) => {
        accumulator[year.season] = (accumulator[year.season] || 0) + 1;
        return accumulator;
    }, {});
    matchesPerYears = { "year": Object.keys(matchesPerYear), "Matches": Object.values(matchesPerYear) };
    return matchesPerYears;
}

module.exports = matchesPerYear;