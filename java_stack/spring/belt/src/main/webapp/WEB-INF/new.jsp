<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>   
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %> 
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New Page</title>
    <link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
</head>
<body>
<div class="container my-5">
	<h3>Create an Idea</h3>
		<form:form method="POST" action="/ideas" modelAttribute="idea">
			<div class="form-group">
			    <form:label path="content">Content</form:label>
			    <form:input path="content" type="text" class="form-control" placeholder="An Idea"/>
			    <form:errors path="content" class="text-danger" />
			</div>
			<input class="btn btn-block btn-dark mt-2" type="submit" value="Create">
		</form:form>
</div>
</body>
</html>