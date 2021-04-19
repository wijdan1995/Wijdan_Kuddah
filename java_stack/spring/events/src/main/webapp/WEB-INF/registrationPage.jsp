<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>    
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Welcome</title>
    <link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
</head>
<body>
<div class="container my-5">
	<h1>Welcome!</h1>
    
   <%--  <p><form:errors class="text-danger" path="user.*"/></p> --%>
    <h2>Register!</h2>
    <form:form method="POST" action="/registration" modelAttribute="user">
   		 <div class="form-group">
			 <form:label path="firstName">First Name</form:label>
			 <form:input path="firstName" type="text" class="form-control"/>
			 <form:errors path="firstName" class="text-danger" />
		</div>
		<div class="form-group">
			 <form:label path="lastName">Last Name</form:label>
			 <form:input path="lastName" type="text" class="form-control"/>
			 <form:errors path="lastName" class="text-danger" />
		</div>
        <div class="form-group">
            <form:label path="email">Email:</form:label>
            <form:input class="form-control" type="email" path="email"/>
            <form:errors path="email" class="text-danger" />
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
    
    
</body>
</html>