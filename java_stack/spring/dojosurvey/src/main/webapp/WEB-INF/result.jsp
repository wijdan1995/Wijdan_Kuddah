<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Dojo Survey</title>
<link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
</head>
<body>
<div class="container">
	<h3>Submitted info</h3>
	<p>Name: <c:out value="${name}"/></p>
	<p>Dojo Location: <c:out value="${location}"/></p>
	<p>Favorite Language: <c:out value="${language}"/></p>
	<p>Comment: <c:out value="${comment}"/></p>
	
	<%-- <c:set var="result" value="${ result }"/>
	<h1>Submitted Info</h1>
	<p><strong>Name:</strong> <c:out value="${ result.getName() }"/></p>
	<p><strong>Language:</strong> <c:out value="${ result.getLanguage() }"/></p>
	<p><strong>Location:</strong> <c:out value="${ result.getLocation() }"/></p>
	<p><strong>Comment:</strong> <c:out value="${ result.getComment() }"/></p> --%>
</div>

</body>
</html>