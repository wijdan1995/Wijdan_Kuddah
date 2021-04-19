<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Questions Dashboard</title>
<link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
</head>
<body>
	<div class="container my-4">
		<h1>Questions Dashboard</h1>
		<table class="table">
			<thead>
				<tr>
					<th>Question</th>
					<th>Tags</th>
				</tr>
			</thead>
			<c:forEach items="${ questions }" var="question">
				<tr>
					<td><a href="/questions/${ question.id }">${ question.question}</a></td>
					<td>
					<c:forEach items="${ question.tags }" var="tag">
						<span class="badge bg-primary">${ tag.subject }</span>
					</c:forEach>
					</td>
				</tr>
			</c:forEach>
		</table>
		<a class="btn btn-dark mt-4" href="/questions/new">New Question</a>
	</div>
</body>
</html>