-- 1
SELECT monthname(charged_datetime) AS 'month', sum(billing.amount) AS revenue
FROM billing 
WHERE charged_datetime >= '2012/03/01' AND charged_datetime < '2012/03/31';

-- 2
SELECT clients.client_id, sum(billing.amount) AS total_revenue
FROM clients
JOIN billing ON billing.client_id = clients.client_id 
WHERE clients.client_id = '2';

-- 3
SELECT sites.domain_name as website , clients.client_id 
FROM clients
JOIN sites ON sites.client_id = clients.client_id
WHERE clients.client_id = '10';

-- 4a
SELECT clients.client_id, count(sites.site_id) as website , monthname(created_datetime), YEAR(created_datetime) 
FROM clients
JOIN sites ON sites.client_id = clients.client_id
WHERE clients.client_id = '1'
GROUP BY sites.site_id;

-- 4b
SELECT clients.client_id, count(sites.client_id) as website , monthname(created_datetime), YEAR(created_datetime) 
FROM clients
JOIN sites ON sites.client_id = clients.client_id
WHERE clients.client_id = '20';

-- 5
SELECT sites.domain_name, count(leads.leads_id)
FROM leads
JOIN sites ON leads.site_id = sites.site_id
WHERE leads.registered_datetime BETWEEN '2011-01-01' AND '2011-02-15'
GROUP BY sites.domain_name;

-- 6
SELECT concat(clients.first_name,' ', clients.last_name) as client, count(leads.leads_id) as number_of_leads
FROM clients
JOIN sites ON clients.client_id = sites.client_id
JOIN leads ON sites.site_id = leads.site_id
WHERE YEAR(leads.registered_datetime) = 2011
GROUP BY clients.client_id;

-- 7 
SELECT concat(clients.first_name,' ', clients.last_name) as client, count(leads.leads_id) as number_of_leads, monthname(leads.registered_datetime) as month_generated
FROM clients
JOIN sites ON clients.client_id = sites.client_id
JOIN leads ON sites.site_id = leads.site_id
WHERE YEAR(leads.registered_datetime) = 2011
AND MONTH(leads.registered_datetime) between 1 and 6
GROUP BY leads.site_id
ORDER BY MONTH(leads.registered_datetime);

-- 8a
SELECT concat(clients.first_name,' ', clients.last_name) as client, sites.domain_name as website, count(leads.leads_id) as number_of_leads
FROM clients
JOIN sites ON clients.client_id = sites.client_id
JOIN leads ON sites.site_id = leads.site_id
WHERE YEAR(leads.registered_datetime) = 2011
GROUP BY leads.site_id
ORDER BY clients.client_id;

-- 8b 
SELECT concat(clients.first_name,' ', clients.last_name) as client, sites.domain_name as website, count(leads.leads_id) as number_of_leads
FROM clients
JOIN sites ON clients.client_id = sites.client_id
JOIN leads ON sites.site_id = leads.site_id
GROUP BY leads.site_id
ORDER BY clients.client_id;

-- 9a
SELECT concat(clients.first_name,' ', clients.last_name) as client_name, sum(billing.amount) AS total_revenuemonthname, month(billing.charged_datetime), year(billing.charged_datetime)
FROM clients
JOIN billing ON billing.client_id = clients.client_id 
GROUP BY clients.client_id, month(billing.charged_datetime), year(billing.charged_datetime)
ORDER BY clients.client_id, year(billing.charged_datetime);

-- 9b 
SELECT concat(clients.first_name,' ', clients.last_name) as client_name, sum(billing.amount) AS total_revenuemonthname, monthname(billing.charged_datetime), year(billing.charged_datetime)
FROM clients
JOIN billing ON billing.client_id = clients.client_id 
GROUP BY clients.client_id, month(billing.charged_datetime), year(billing.charged_datetime)
ORDER BY clients.client_id, year(billing.charged_datetime);

-- 10
SELECT concat(clients.first_name, ' ', clients.last_name) AS client_name, group_concat(sites.domain_name) AS sites
FROM clients
LEFT JOIN sites ON clients.client_id = sites.client_id
GROUP BY clients.client_id;







