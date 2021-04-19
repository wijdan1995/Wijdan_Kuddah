<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
	<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
		<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
			<!DOCTYPE html>
			<html>

			<head>
				<meta charset="UTF-8">
				<title>New Dojo</title>
				<link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
			</head>

			<body>
				<div class="container mt-5">
					<h1>New Dojo</h1>
					<div>
						<form:form action="/dojos" method="post" modelAttribute="dojo">
							<div class="form-group">
								<form:label path="name">Name:</form:label>
								<form:input path="name" class="form-control" />
								<form:errors path="name" class="text-danger" />
							</div>
							<input type="submit" value="Create" class="btn btn-dark mt-4" />
						</form:form>
					</div>

				</div>
			</body>

			</html>