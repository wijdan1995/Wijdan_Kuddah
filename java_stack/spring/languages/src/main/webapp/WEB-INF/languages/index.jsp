<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
	<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
		<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
			<!DOCTYPE html>
			<html>

			<head>
				<meta charset="UTF-8">
				<title>Languages</title>
				<link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
			</head>

			<body>
				<div class="container mt-5">
					<h1>All Languages</h1>
					<table class="table">
						<thead>
							<tr>
								<th>Name</th>
								<th>Creator</th>
								<th>Version</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>

							<c:forEach items="${languages}" var="language">
								<tr>
									<td>
										<a href="/languages/${language.id}"><c:out value="${language.name}" /></a> 
									</td>
									<td>
										<c:out value="${language.creator}" />
									</td>
									<td>
										<c:out value="${language.currentVersion}" />
									</td>
									<td class="btn-group "><a class="btn btn-secondary" href="/languages/${language.id}/edit">Edit</a>
										<form class="btn-secondary" action="/languages/${language.id}/delete"
											method="post">
											<input type="hidden" name="_method" value="delete">
											<input class="btn btn-secondary" type="submit" value="Delete">
										</form>
									</td>
								</tr>
							</c:forEach>

						</tbody>
					</table>
					<div>
						<form:form action="/languages" method="post" modelAttribute="language">
							<div class="form-group">
								<form:label path="name">Name:</form:label>
								<form:input path="name" class="form-control" />
								<form:errors path="name" class="text-danger" />
							</div>
							<div class="form-group">
								<form:label path="creator">Creator:</form:label>
								<form:input path="creator" class="form-control" />
								<form:errors path="creator" class="text-danger" />
							</div>
							<div class="form-group">
								<form:label path="currentVersion">Version:</form:label>
								<form:input path="currentVersion" class="form-control" />
								<form:errors path="currentVersion" class="text-danger" />
							</div>
							<input type="submit" value="Create" class="btn btn-dark mt-4" />
						</form:form>
					</div>



				</div>
			</body>

			</html>