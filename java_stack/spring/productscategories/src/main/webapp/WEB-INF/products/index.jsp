<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
	<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
		<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
			<!DOCTYPE html>
			<html>

			<head>
				<meta charset="UTF-8">
				<title>All Products</title>
				<link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
			</head>

			<body>
				<div class="container mt-5">
					<nav class="d-flex justify-content-between">
						<a class="btn btn-dark" href="/categories">Categories</a>
						<a class="btn btn-dark" href="/products/new">Add Product</a>

					</nav>
					<h1 class="mt-4">All Products</h1>
					<ul class="list-group">
						<c:forEach items="${products}" var="product">
							<li class="list-group-item"><a href="/products/${ product.id }">${ product.name }</a></li>
						</c:forEach>
					</ul>

				</div>
			</body>

			</html>