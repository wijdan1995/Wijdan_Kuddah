<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>   
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %> 
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Edit Event</title>
    <link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
</head>
<body>
<div class="container my-5">
	<h1>${event.name}</h1>
	<h3 class="mt-3">Edit Event</h3>
	
		<form:form method="POST" action="/events/${event.id}/edit" modelAttribute="event">
			<div class="form-group">
			    <form:label path="name">Name</form:label>
			    <form:input path="name" type="text" class="form-control"/>
			    <form:errors path="name" class="text-danger" />
			</div>
			<div class="form-group">
			    <form:label path="eventDate">Date</form:label>
			    <form:input path="eventDate" type="date" class="form-control"/>
			    <form:errors path="eventDate" class="text-danger" />
			</div>
			<div class="form-group">
			    <form:label path="city">location</form:label>
			    <form:input path="city" type="text" class="form-control"/>
			    <form:errors path="city" class="text-danger" />
			</div>
			<div class="form-group">
			    <form:label path="state">State</form:label>
			    <form:select path="state" class="form-control">
			    	<form:option value="CA">CA</form:option>
			    	<form:option value="OR">OR</form:option>
			    	<form:option value="WA">WA</form:option>
			    	<form:option value="TX">TX</form:option>
			    	<form:option value="NV">NV</form:option>
			    </form:select>
			    <form:errors path="state" class="text-danger" />
			</div>
			<input class="btn btn-block btn-dark mt-2" type="submit" value="Edit">
		</form:form>
    
   
</div>
    
    
</body>
</html>