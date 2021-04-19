<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
	<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
		<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
			<!DOCTYPE html>
			<html>

			<head>
				<meta charset="UTF-8">
				<title>All Ninjas</title>
				<link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
			</head>

			<body>
				<div class="container mt-5">
					<nav class="d-flex justify-content-between">
		                <a class="btn btn-dark" href="/dojos">Dojos</a>
		                <a class="btn btn-dark" href="/ninjas/new">Add Ninja</a>
		                
		            </nav>
		            <h1 class="mt-4">All Ninjas</h1>
					<ul class="list-group">
		                <c:forEach items="${ninjas}" var="ninja">
		                    <li class="list-group-item"> ${ninja.firstName} ${ninja.lastName} - Dojo <a href="/dojos/${ ninja.dojo.id }">${ ninja.dojo.name }</a></li>
		                </c:forEach>
		            </ul>

				</div>
			</body>

			</html>