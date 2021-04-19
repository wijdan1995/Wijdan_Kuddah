<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
	<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
		<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
			<!DOCTYPE html>
			<html>

			<head>
				<meta charset="UTF-8">
				<title>New Ninja</title>
				<link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
			</head>

			<body>
				<div class="container mt-5">
					<h1>New Ninja</h1>
					<div>
						<form:form action="/ninjas" method="post" modelAttribute="ninja">
							<div class="form-group">
								<form:label path="dojo">Dojo:</form:label>
								<form:select class="form-control" path="dojo">
						        <c:forEach items="${ dojos }" var="dojo">
						        	<option value="${ dojo.id }">${ dojo.name }</option>
						        </c:forEach>
						        </form:select>
								<form:errors path="dojo" class="text-danger" />
							</div>
							<div class="form-group">
								<form:label path="firstName">First Name:</form:label>
								<form:input path="firstName" class="form-control" />
								<form:errors path="firstName" class="text-danger" />
							</div>
							<div class="form-group">
								<form:label path="lastName">Last Name:</form:label>
								<form:input path="lastName" class="form-control" />
								<form:errors path="lastName" class="text-danger" />
							</div>
							<div class="form-group">
								<form:label path="age">Age:</form:label>
								<form:input path="age" class="form-control" />
								<form:errors path="age" class="text-danger" />
							</div>
							<input type="submit" value="Create" class="btn btn-dark mt-4" />
						</form:form>
					</div>

				</div>
			</body>

			</html>