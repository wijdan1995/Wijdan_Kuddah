<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>    
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Ideas</title>
    <link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
</head>
<body>
<div class="container my-5">
	<h1>Welcome!</h1>
    <div class="row">
    	<div class="col">
    		<h2>Register!</h2>
		    <form:form method="POST" action="/registration" modelAttribute="user">
		   		 <div class="form-group">
					 <form:label path="name">Name</form:label>
					 <form:input path="name" type="text" class="form-control"/>
					 <form:errors path="name" class="text-danger" />
				</div>
		        <div class="form-group">
		            <form:label path="email">Email:</form:label>
		            <form:input class="form-control" type="text" path="email"/>
		            <form:errors path="email" class="text-danger" />
		        </div>
		        <div>
		            <form:label path="password">Password:</form:label>
		            <form:password class="form-control" path="password"/>
		            <form:errors path="password" class="text-danger" />
		            
		        </div>
		        <div class="form-group">
		            <form:label path="passwordConfirmation">Password Confirmation:</form:label>
		            <form:password class="form-control" path="passwordConfirmation"/>
		            <form:errors path="passwordConfirmation" class="text-danger" />
		        </div>
		        <input class="btn btn-block btn-dark mt-2" type="submit" value="Register!"/>
		    </form:form>
    	</div>
    	<div class="col">
    		<h2 class="mt-4">Login</h2>
		    <p class="text-danger"><c:out value="${error}" /></p>
		    <form method="post" action="/login">
		        <div class="form-group">
		            <label for="email">Email</label>
		            <input class="form-control" type="text" id="email" name="email"/>
		        </div>
		        <div class="form-group">
		            <label for="password">Password</label>
		            <input class="form-control" type="password" id="password" name="password"/>
		        </div>
		        <input class="btn btn-block btn-dark mt-2" type="submit" value="Login!"/>
		    </form>
    	</div>
    </div> 
</div>
</body>
</html>