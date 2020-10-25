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

SELECT users.id, users.first_name,users.last_name, count(friendships.friend_id) as 'all friendships'
FROM users 
JOIN friendships ON friendships.user_id = users.id
GROUP BY users.id;

SELECT users.id, users.first_name,users.last_name, count(friendships.friend_id) as 'all friendships'
FROM users 
JOIN friendships ON friendships.user_id = users.id
WHERE users.id = '1';

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







