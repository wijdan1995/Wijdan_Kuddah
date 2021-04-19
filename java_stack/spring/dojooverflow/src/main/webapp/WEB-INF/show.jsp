<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Question Page</title>
<link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
</head>
<body>
	<div class="container my-4">
		<h1>${ question.question }</h1>
		
		<h3>Tags: 
			<c:forEach items="${ question.tags }" var="tag">
				<span class="badge bg-primary">${ tag.subject }</span>
			</c:forEach>
		</h3>
		<table class="table">
			<thead>
				<tr>
					<th>Answers</th>
				</tr>
			</thead>
			<c:forEach items="${ question.answers }" var="answer">
				<tr>
					<td>
					
						${ answer.answer }
					
					</td>
				</tr>
				
			</c:forEach>

		</table>
		
		<h3>Add your answer:</h3>
		<form:form action="/answers" method="post" modelAttribute="answer">
			 <div class="form-group">
		        <form:label path="answer">Answer</form:label>
		        <form:errors path="answer" class="text-danger"/>
		        <form:textarea class="form-control" path="answer"></form:textarea>
		    </div>
		    <form:hidden path="question" value="${ question.id }"/>
		    <button class="btn btn-dark mt-4">Answer it!</button>
		</form:form>
	</div>
</body>
</html>