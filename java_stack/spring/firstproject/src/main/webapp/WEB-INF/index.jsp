<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Home Page</title>
<link rel="stylesheet" type="text/css" href="css/style.css">
<script type="text/javascript" src="js/app.js"></script>
</head>
<body>
	<h1>Hello World!</h1>
	<p>Welcome, <c:out value="${name}"/></p>
	<p>The date is: <fmt:formatDate type = "date" dateStyle = "long" value = "${date}" /></p>
	<p>The time is: <fmt:formatDate type = "time" timeStyle = "short" value = "${date}" /></p>
	<a href="/api/?q=Wijdan">Wijdan</a>
</body>
</html>