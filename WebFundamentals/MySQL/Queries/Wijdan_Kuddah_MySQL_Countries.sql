SELECT name ,languages.language, languages.percentage  
FROM countries
JOIN languages ON languages.country_id = countries.id
WHERE language = 'Slovene'
ORDER BY languages.percentage DESC;

SELECT * FROM countries;

SELECT countries.name, COUNT(cities.name) AS cities 
FROM countries
JOIN cities ON cities.country_id = countries.id
GROUP BY countries.id
ORDER BY cities DESC;

SELECT cities.name, cities.population, cities.country_id  
FROM cities
JOIN countries ON countries.id = cities.country_id
WHERE countries.name = 'Mexico' AND cities.population > 500000
ORDER BY cities.population DESC;

SELECT name ,languages.language, languages.percentage  
FROM countries
JOIN languages ON languages.country_id = countries.id
WHERE languages.percentage > 89
ORDER BY languages.percentage DESC;

SELECT name, surface_area, population 
FROM countries
WHERE surface_area < 501 AND population > 100000;

SELECT name, government_form, capital,life_expectancy FROM countries
WHERE government_form = 'Constitutional Monarchy' AND capital > 200 AND life_expectancy > 75;

SELECT countries.name AS country_name, cities.name AS city_name, cities.district, cities.population
FROM cities
JOIN countries on countries.id = cities.country_id
WHERE countries.name = 'Argentina'
	AND cities.district = 'Buenos Aires'
    AND cities.population > 500000;


SELECT countries.region, COUNT(countries.name) AS countries
FROM countries
GROUP BY countries.region
ORDER BY countries DESC;







