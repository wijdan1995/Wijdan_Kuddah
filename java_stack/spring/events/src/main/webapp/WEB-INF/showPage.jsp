<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>   
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %> 
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Event Page</title>
    <link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
</head>
<body>
<div class="container my-5">
	<h1>${event.name}</h1>
	<p>Host: ${event.host.firstName} ${event.host.lastName}</p>
	<p>Date: <fmt:formatDate type = "date" dateStyle = "long" value = "${event.eventDate}" /></p>
	<p>Location: ${event.city}, ${event.state}</p>
	<p>People who are attending this event: ${event.attendees.size()}</p>
    <table class="table mb-4">
			<thead>
			    <tr>
			      <th>Name</th>
			      <th>Location</th>
			    </tr>
			  </thead>
			  <tbody>
			    <c:forEach items="${event.attendees}" var="user">
			  	<tr>
			      <td>${user.firstName} ${user.lastName}</td>
			      <td>${user.city}</td>
			    </tr>
			  </c:forEach>
			  </tbody>
		</table>
    <h3>Messages Wall</h3>
    <div class="overflow-auto">
    	<c:forEach items="${event.messages}" var="message">
    		<p>${message.author.firstName} says: ${message.content}</p>
    		<p>_*_*_*_*_*_*_*_*_*_*_*_*_*_</p>
    	</c:forEach>
    </div>
    <form:form action="/messages" method="post" modelAttribute="message">
		<div class="form-group">
			<form:label path="content">Add Comment:</form:label>
			<form:errors path="content" class="text-danger"/>
		    <form:textarea class="form-control" path="content"></form:textarea>
		</div>
		<form:hidden path="event" value="${ event.id }"/>
		<button class="btn btn-dark mt-4">Submit</button>
	</form:form>
   
</div>
    
    
</body>
</html>