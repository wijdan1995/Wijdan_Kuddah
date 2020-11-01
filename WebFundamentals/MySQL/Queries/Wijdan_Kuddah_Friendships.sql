SELECT * FROM users;
SELECT * FROM friendships;

SELECT users.id, users.first_name,users.last_name,users2.first_name as friend_first_name, users2.last_name as friend_last_name 
FROM users 
JOIN friendships ON friendships.user_id = users.id
LEFT JOIN users as users2 ON users2.id = friendships.friend_id;

SELECT users.id, users.first_name,users.last_name,users2.first_name as friend_first_name, users2.last_name as friend_last_name 
FROM users 
JOIN friendships ON friendships.user_id = users.id
LEFT JOIN users as users2 ON users2.id = friendships.friend_id
WHERE friendships.friend_id = '4' ;

SELECT users.id, users.first_name,users.last_name, count(friendships.friend_id) as all_friendships
FROM users 
JOIN friendships ON friendships.user_id = users.id
GROUP BY users.id;

SELECT users.id, users.first_name,users.last_name, count(friendships.friend_id) as all_friendships
FROM users 
JOIN friendships ON friendships.user_id = users.id
group by users.id
order by all_friendships desc
LIMIT 1;

SELECT all_frinds_count.first_name, all_frinds_count.last_name, all_frinds_count.frinds_count
FROM
(SELECT users.first_name, users.last_name, COUNT(friendships.friend_id) AS frinds_count
FROM users 
JOIN friendships ON users.id = friendships.user_id
GROUP BY users.id) AS all_frinds_count
HAVING all_frinds_count.frinds_count = MAX(all_frinds_count.frinds_count);




INSERT INTO users (first_name, last_name, created_at)
VALUES ('Wijdan', 'Kuddah', NOW());

INSERT INTO friendships (user_id, friend_id, created_at)
VALUES ('6', '2', NOW()), ('6', '4', NOW()), ('6', '5', NOW());

SELECT users.id, users.first_name,users.last_name,users2.first_name as friend_first_name, users2.last_name as friend_last_name 
FROM users 
JOIN friendships ON friendships.user_id = users.id
LEFT JOIN users as users2 ON users2.id = friendships.friend_id
WHERE users.id = '2'
ORDER BY friend_first_name;

DELETE FROM friendships 
WHERE user_id = '2'AND friend_id = '5';

SELECT users.id, users.first_name,users.last_name,users2.first_name as friend_first_name, users2.last_name as friend_last_name 
FROM users 
JOIN friendships ON friendships.user_id = users.id
LEFT JOIN users as users2 ON users2.id = friendships.friend_id;







