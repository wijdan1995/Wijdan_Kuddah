<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>   
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %> 
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Show Page</title>
    <link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
</head>
<body>
<div class="container my-5">
	<div class="d-flex justify-content-between align-items-center my-4">
		<h1>${idea.content}</h1>
		<a href="/ideas" class="btn btn-dark">Back</a>
	</div>
	
	<p>Created By: ${idea.creator.name}</p>
	
	<h3>People who liked your Idea ${idea.likedBy.size()}:</h3>
	    <table class="table mb-4">
			<thead>
			    <tr>
			      <th>Name</th>
			    </tr>
			  </thead>
			  <tbody>
			    <c:forEach items="${idea.likedBy}" var="user">
			  	<tr>
			      <td>${user.name}</td>
			    </tr>
			  </c:forEach>
			  </tbody>
		</table>
		
		<a href="/ideas/${idea.id}/edit" class="btn btn-dark">Edit</a>
</div>
    
    
</body>
</html>