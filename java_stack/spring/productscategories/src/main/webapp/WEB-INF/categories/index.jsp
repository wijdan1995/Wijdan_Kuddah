<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
	<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
		<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
			<!DOCTYPE html>
			<html>

			<head>
				<meta charset="UTF-8">
				<title>All Categories</title>
				<link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
			</head>

			<body>
				<div class="container mt-5">
					<nav class="d-flex justify-content-between">
						<a class="btn btn-dark" href="/products">Products</a>
						<a class="btn btn-dark" href="/categories/new">Add category</a>

					</nav>
					<h1 class="mt-4">All Categories</h1>
					<ul class="list-group">
						<c:forEach items="${categories}" var="category">
							<li class="list-group-item"><a href="/categories/${ category.id }">${ category.name }</a></li>
						</c:forEach>
					</ul>

				</div>
			</body>

			</html>