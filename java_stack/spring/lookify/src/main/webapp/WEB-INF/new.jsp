<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
<link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
<title>Lookify | New Song</title>
</head>
<body>
	<div class="container mt-4">

		<form:form action="/songs" method="POST" modelAttribute="song">
			<div class="form-group mb-2">
		        <form:label path="name">Song Title</form:label>
		        <form:errors class="text-danger" path="name"/>
		        <form:input class="form-control" path="name"/>
		    </div>
		    <div class="form-group mb-2">
		        <form:label path="artist">Artist</form:label>
		        <form:errors class="text-danger" path="artist"/>
		        <form:input class="form-control" path="artist"/>
		    </div>
		    <div class="form-group mb-2">
		        <form:label path="rating">Rating</form:label>
		        <form:errors class="text-danger" path="rating"/>
		        <form:input type="number" min="1" max="10" class="form-control" path="rating"/>
		    </div>
		    <button class="btn btn-dark mt-4">Add Song</button>
		</form:form>
	</div>
</body>
</html>