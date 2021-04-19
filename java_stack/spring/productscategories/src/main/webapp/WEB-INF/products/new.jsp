<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
	<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
		<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
			<!DOCTYPE html>
			<html>

			<head>
				<meta charset="UTF-8">
				<title>New Product</title>
				<link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
			</head>

			<body>
				<div class="container mt-5">
					<h1>New Product</h1>
					<div>
						<form:form action="/products" method="post" modelAttribute="product">
							<div class="form-group">
								<form:label path="name">Name:</form:label>
								<form:input path="name" class="form-control" />
								<form:errors path="name" class="text-danger" />
							</div>
							<div class="form-group">
								<form:label path="description">Description:</form:label>
								<form:input path="description" class="form-control" />
								<form:errors path="description" class="text-danger" />
							</div>
							<div class="form-group">
								<form:label path="price">Price:</form:label>
								<form:input path="price" type="number" class="form-control" />
								<form:errors path="price" class="text-danger" />
							</div>
							<input type="submit" value="Create" class="btn btn-dark mt-4" />
						</form:form>
					</div>

				</div>
			</body>

			</html>