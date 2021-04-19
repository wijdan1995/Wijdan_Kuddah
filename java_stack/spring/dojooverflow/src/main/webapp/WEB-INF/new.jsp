<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>New Question</title>
<link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
</head>
<body>
	<div class="container my-4">
		<h1>What is your Question</h1>
		<form:form action="/questions" method="post" modelAttribute="newQuestion">
			 <div class="form-group">
		        <form:label path="question">Question</form:label>
		        <form:errors path="question" class="text-danger"/>
		        <form:textarea class="form-control" path="question"></form:textarea>
		    </div>
		    <div class="form-group">
		        <form:label path="tagsInput">Tags</form:label>
		        <form:errors path="tagsInput" class="text-danger"/>
		        <form:input class="form-control" path="tagsInput"/>
		        <div class="form-text">Separate each tag with a ",".</div>
		    </div>
		    <input type="submit" value="Submit" class="btn btn-dark mt-4" />
		</form:form>
	</div>
</body>
</html>