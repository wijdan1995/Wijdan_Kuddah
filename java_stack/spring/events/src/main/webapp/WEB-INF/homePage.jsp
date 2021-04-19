<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>    
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Events</title>
	<link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
</head>
<body>
	<div class="container my-5">
		<div class="d-flex justify-content-between align-items-center my-4">
			<h1>Welcome, <c:out value="${user.firstName}" /></h1>
			<a class="btn btn-secondary" href="/logout">Logout</a>
		</div>
		<p>Here are some of the events in your state</p>
		<table class="table mb-4">
			<thead>
			    <tr>
			      <th>Name</th>
			      <th>Date</th>
			      <th>Location</th>
			      <th>Host</th>
			      <th>Action / State</th>
			    </tr>
			  </thead>
			  <tbody>
			    <c:forEach items="${events}" var="event">
			   <c:if test="${user.state == event.state}">
			  	<tr>
			      <td><a href="/events/${event.id}">${event.name}</a></td>
			      <td><fmt:formatDate type = "date" dateStyle = "long" value = "${event.eventDate}" /></td>
			      <td>${event.city}</td>
			      <td>${event.host.firstName}</td>
			      <td>
			      	<c:if test="${user.id == event.host.id}">
				      	<a href="/events/${event.id}/edit" class="btn btn-info btn-sm">Edit</a>
					      <a href="/events/${event.id}/delete" class="btn btn-danger btn-sm">Delete</a>
			      	</c:if>
			      	<c:if test="${user.id != event.host.id}">
				      	<c:if test="${event.isAttending(user.id)}">
				      			Joining <a href="/events/${user.id}/leave/${event.id}" class="btn btn-warning btn-sm">Cancel</a>
				      	</c:if>
				      	<c:if test="${!event.isAttending(user.id)}">
				      		<a href="/events/${user.id}/join/${event.id}" class="btn btn-primary btn-sm">Join</a>
				      	</c:if>
			      	</c:if>
				      	
			      	
			      	
			      </td>
			    </tr>
			  	</c:if>
			  	
			  </c:forEach>
			  </tbody>
		</table>
		
		<p>Here are some of the events in other states</p>
		<table class="table mb-4">
			<thead>
			    <tr>
			      <th>Name</th>
			      <th>Date</th>
			      <th>Location</th>
			      <th>State</th>
			      <th>Host</th>
			      <th>Action / State</th>
			    </tr>
			  </thead>
			  <tbody>
			  <c:forEach items="${events}" var="event">
			   <c:if test="${user.state != event.state}">
			  	<tr>
			      <td><a href="/events/${event.id}">${event.name}</a></td>
			      <td><fmt:formatDate type = "date" dateStyle = "long" value = "${event.eventDate}" /></td>
			      <td>${event.city}</td>
			      <td>${event.state}</td>
			      <td>${event.host.firstName}</td>
			      <td>
			      	<c:if test="${user.id == event.host.id}">
				      	<a href="/events/${event.id}/edit" class="btn btn-info btn-sm">Edit</a>
					      <a href="/events/${event.id}/delete" class="btn btn-danger btn-sm">Delete</a>
			      	</c:if>
			      	<c:if test="${user.id != event.host.id}">
				      	<c:if test="${event.isAttending(user.id)}">
				      			Joining <a href="/events/${user.id}/leave/${event.id}" class="btn btn-warning btn-sm">Cancel</a>
				      	</c:if>
				      	<c:if test="${!event.isAttending(user.id)}">
				      		<a href="/events/${user.id}/join/${event.id}" class="btn btn-primary btn-sm">Join</a>
				      	</c:if>
			      	</c:if>
				      	
			      	
			      	
			      </td>
			    </tr>
			  	</c:if>
			  	
			  </c:forEach>

			  </tbody>
		</table>
		
		<h3>Create an Event</h3>
		<form:form method="POST" action="/events" modelAttribute="event">
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
			<input class="btn btn-block btn-dark mt-2" type="submit" value="Create">
		</form:form>
		
		
	</div>
	
</body>
</html>