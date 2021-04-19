<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
	<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
		<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
			<!DOCTYPE html>
			<html>

			<head>
				<meta charset="UTF-8">
				<title>All Dojos</title>
				<link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
			</head>

			<body>
				<div class="container mt-5">
					<nav class="d-flex justify-content-between">
						<a class="btn btn-dark" href="/ninjas">Ninjas</a>
						<a class="btn btn-dark" href="/dojos/new">Add Dojo</a>

					</nav>
					<h1 class="mt-4">All Dojos</h1>
					<ul class="list-group">
						<c:forEach items="${dojos}" var="dojo">
							<li class="list-group-item"><a href="/dojos/${ dojo.id }">${ dojo.name }</a></li>
						</c:forEach>
					</ul>

				</div>
			</body>

			</html>