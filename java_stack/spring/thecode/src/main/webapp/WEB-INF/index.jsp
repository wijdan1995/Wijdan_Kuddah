<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Welcome</title>
<link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
</head>
<body>
<div class="container text-center m-5">
	<p class="text-danger"><c:out value="${error}"/></p>
	<form method="POST" action="/prosses">
	<div class="form-group">
	<label>What is the Code? </label>
	<input type="text" name="code" class="form-control">
	</div>
    
    <button class="btn btn-primary mt-2">Try code</button>
</form>
</div>

</body>
</html>