<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Home Page</title>
	<link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
</head>
<body>
	<div class="container my-5">
		<div class="d-flex justify-content-between align-items-center my-4">
			<h1>Welcome, <c:out value="${user.name}" /></h1>
			<a class="btn btn-secondary" href="/logout">Logout</a>
		</div>
		<h3>Ideas</h3>
		<table class="table mb-4">
			<thead>
			    <tr>
			      <th>Name</th>
			      <th>Created By</th>
			      <th>Likes</th>
			      <th>Action</th>
			    </tr>
			  </thead>
			  <tbody>
			    <c:forEach items="${ideas}" var="idea">
			  	<tr>
			      <td><a href="/ideas/${idea.id}">${idea.content}</a></td>
			      <td>${idea.creator.name}</td>
			      <td>${idea.likedBy.size()}</td>
			      <td>
			      	<c:if test="${!idea.likedBy.contains(user)}">
				      	<a href="/ideas/${idea.id}/like" class="btn btn-primary btn-sm">Like</a>
			      	</c:if>
			      	<c:if test="${idea.likedBy.contains(user)}">
				      	<a href="/ideas/${idea.id}/unlike" class="btn btn-warning btn-sm">Unlike</a>
			      	</c:if>
			      </td>
			    </tr>
			  </c:forEach>
			  </tbody>
		</table>
		<a href="ideas/new" class="btn btn-primary">Create an Idea</a>
	</div>
	
</body>
</html>